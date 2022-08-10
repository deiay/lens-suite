import { UseAccountConfig } from 'wagmi/dist/declarations/src/hooks/accounts/useAccount';
import { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import getChallengeQuery from '../graphql/get-challenge.graphql';
import authenticateChallengeQuery from '../graphql/auth-challenge.graphql';
import {
    GetChallenge as GetChallengeQuery,
    GetChallengeVariables as GetChallengeQueryVariables,
    AuthenticateChallenge as AuthenticateChallengeQuery,
    AuthenticateChallengeVariables as AuthenticateChallengeQueryVariables
} from '~types/generated';
import { useAccount, useSignMessage } from 'wagmi';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';


export const AUTH_COOKIE_LABELS = {
    LENS_JWT: 'X-ACCESS-TOKEN',
    LENS_JWT_REFRESH: 'X-LENS-ACL-REFRESH',
}

export const useAuth = () => {
    const [getChallenge] = useLazyQuery<GetChallengeQuery,GetChallengeQueryVariables>(getChallengeQuery, {fetchPolicy: 'no-cache'});
    const [authenticateChallenge] = useMutation<AuthenticateChallengeQuery,AuthenticateChallengeQueryVariables>(authenticateChallengeQuery, {fetchPolicy: 'no-cache'});
    const [isConnected, setConnected] = useState(getCookie(AUTH_COOKIE_LABELS.LENS_JWT) !== undefined);
    const [connectedAddress, setConnectedAddress] = useState<string>()

    const { signMessageAsync } = useSignMessage();

    const clearAuthTokens = () => {        
        deleteCookie(AUTH_COOKIE_LABELS.LENS_JWT)
        deleteCookie(AUTH_COOKIE_LABELS.LENS_JWT_REFRESH)
        setConnected(false)
    }

    const authAddress = async (address: string) => {
        const {data} = await getChallenge({ variables: { address } });

        const message = data?.challenge.text   
        if (!message) throw 'Unable to create challenge'

        try {
            const signedMessage = await signMessageAsync({message})
            const { data } = await authenticateChallenge({variables: { request: { address ,signature: signedMessage}}});

            if (!data?.authenticate.accessToken) throw 'Unable to authenticate'
            
            setCookie(AUTH_COOKIE_LABELS.LENS_JWT, data?.authenticate.accessToken, {
                httpOnly: false,
                path: '/'
            });                                                
            setCookie(AUTH_COOKIE_LABELS.LENS_JWT_REFRESH, data?.authenticate.accessToken, {                    
                httpOnly: false,   
                path: '/'             
            }); 
            setConnected(true)                    
            setConnectedAddress(address)
                
        } catch (error: any) {
            if (error.code === 4001) {
                // user rejected the signature request. do nothing
            } else {
                console.error({ error })
            }
        }                
    }

    const onConnect: UseAccountConfig["onConnect"] = async ({
        address,
      }) => {

        if (address && getCookie(AUTH_COOKIE_LABELS.LENS_JWT, {domain: process.env.NEXT_PUBLIC_LENS_API_URL}) === undefined) {
          await authAddress(address);
        }
      };
    

    const onDisconnect: UseAccountConfig["onDisconnect"] = async () => {
        setConnectedAddress(undefined)
        clearAuthTokens();
    };
    
    useAccount({ onConnect, onDisconnect });
    
    return { isConnected, connectedAddress };
}
import { useLazyQuery, useMutation } from '@apollo/client';
import getChallengeQuery from '../graphql/get-challenge.graphql';
import authenticateChallengeQuery from '../graphql/auth-challenge.graphql';
import {
    GetChallenge as GetChallengeQuery,
    GetChallengeVariables as GetChallengeQueryVariables,
    AuthenticateChallenge as AuthenticateChallengeQuery,
    AuthenticateChallengeVariables as AuthenticateChallengeQueryVariables
} from '~types/generated';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';

export const useAuth = () => {
    const [getChallenge] = useLazyQuery<GetChallengeQuery,GetChallengeQueryVariables>(getChallengeQuery, {fetchPolicy: 'no-cache'});
    const [authenticateChallenge] = useMutation<AuthenticateChallengeQuery,AuthenticateChallengeQueryVariables>(authenticateChallengeQuery, {fetchPolicy: 'no-cache'});
    
    const { signMessageAsync } = useSignMessage();
    const { disconnect } = useDisconnect()

    const authAddress = async (address: string) => {
        const {data} = await getChallenge({ variables: { address } });

        const message = data?.challenge.text   
        if (!message) throw 'Unable to create challenge'

        try {
            const signedMessage = await signMessageAsync({message})
            const response = await authenticateChallenge({variables: { request: { address ,signature: signedMessage}}});
            console.log({ response })
        } catch (error: any) {
            if (error.code === 4001) {
                // user rejected the signature request. do nothing
            } else {
                console.error({ error })
            }
            disconnect()
        }                
    }
    return { authAddress };
}
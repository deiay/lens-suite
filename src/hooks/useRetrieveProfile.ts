import { useLazyQuery, useMutation } from "@apollo/client";
import fetchProfileQuery from "../graphql/fetch-profile.graphql";
import createProfileQuery from "../graphql/create-profile.graphql";
import {
  FetchProfile as FetchProfileQuery,
  FetchProfileVariables as FetchProfileQueryVariables,
  CreateProfile as CreateProfileQuery,
  CreateProfileVariables as CreateProfileQueryVariables,
} from "~types/generated";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useWaitForTransaction } from "wagmi";
import { Profile } from "~types/standard";
import { setDefaultResultOrder } from "dns";

interface UseRetrieveProfile {
    connectedAddress?: string
    onOnboardingRequired: () => void
    setProfile: (profile?: Profile) => void
}

export const useRetrieveProfile = ({connectedAddress, onOnboardingRequired, setProfile}: UseRetrieveProfile) => {
    const [_fetchProfile, { loading: fetchProfileLoading }] = useLazyQuery<
    FetchProfileQuery,
    FetchProfileQueryVariables
  >(fetchProfileQuery, { fetchPolicy: "no-cache" });

    const [_createProfile, {loading: createProfileLoading}] = useMutation<
    CreateProfileQuery,
    CreateProfileQueryVariables
    >(createProfileQuery);

    const [txHash, setTxHash] = useState<string>()
    const [error, setError] = useState<string>()

    const {
      isLoading: transactionProcessing,
     } = useWaitForTransaction({hash: txHash, onError: (error) => {
      console.log('Error creating profile', {error})
     }, onSuccess: async (receipt) => {
      console.log('Successfully created profile', {receipt})
      await fetchProfile();
    }});


   const createProfile =  useCallback(async (handle: string) => {
    setError(undefined)
    if (!connectedAddress) return 
    
    const { data } = await _createProfile({
        variables: { input: { handle }},
    });

    if (data?.createProfile.__typename !== 'RelayerResult') {
      console.error('Error while fetching profile', {error: data?.createProfile.reason})
      setError(data?.createProfile.reason)
      throw 'Unable to fetch profile';
    } 

    setTxHash(data.createProfile.txHash)

    },[connectedAddress, _createProfile])

  const fetchProfile = useCallback(async () => {
    setError(undefined)
    if (!connectedAddress) {
      setProfile(undefined)
      return 
    }
    console.log('fetching profile')
    const { data } = await _fetchProfile({
        variables: { address: connectedAddress },
    });
    if (!data) throw 'Unable to fetch profile';

    if (!data?.profiles?.items?.length) {
      setProfile(undefined)
      onOnboardingRequired()        
    } else {
      setProfile(data?.profiles?.items[0])
    }

    },[connectedAddress, _fetchProfile, onOnboardingRequired, setProfile])

  const loading = useMemo(() => fetchProfileLoading || createProfileLoading || transactionProcessing, [
    fetchProfileLoading,
    createProfileLoading,
    transactionProcessing,
  ])

  useEffect(() => {
    if (connectedAddress) {
        fetchProfile()      
    } 
  }, [connectedAddress, fetchProfile]);

  return { createProfile, fetchProfile, loading, error }
}
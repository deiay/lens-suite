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

interface UseRetrieveProfile {
    connectedAddress?: string
    onOnboardingRequired: () => void
}

export const useRetrieveProfile = ({connectedAddress, onOnboardingRequired}: UseRetrieveProfile) => {
    const [_fetchProfile, { data, loading: fetchProfileLoading }] = useLazyQuery<
    FetchProfileQuery,
    FetchProfileQueryVariables
  >(fetchProfileQuery);

    const [_createProfile, {loading: createProfileLoading}] = useMutation<
    CreateProfileQuery,
    CreateProfileQueryVariables
    >(createProfileQuery);

    const [txHash, setTxHash] = useState<string>()

    const { isLoading: transactionProcessing } = useWaitForTransaction({hash: txHash});

   const createProfile =  useCallback(async (handle: string) => {
    if (!connectedAddress) return 
    
    const { data } = await _createProfile({
        variables: { input: { handle }},
    });

    if (data?.createProfile.__typename !== 'RelayerResult') throw 'Unable to fetch profile';

    setTxHash(data.createProfile.txHash)

    },[connectedAddress, _createProfile])

  const fetchProfile = useCallback(async () => {
    if (!connectedAddress) return 
    const { data } = await _fetchProfile({
        variables: { address: connectedAddress },
    });
    if (!data) throw 'Unable to fetch profile';

    if (!data.defaultProfile) {
      onOnboardingRequired()        
    }

    },[connectedAddress, _fetchProfile, onOnboardingRequired])


  const profile = useMemo(() => data?.defaultProfile, [data])

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

  return { profile, createProfile, loading }
}
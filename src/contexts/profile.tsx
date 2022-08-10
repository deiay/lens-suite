import { createContext, useContext, useState } from "react";
import { ContainerProps } from "~components/mixins";
import { useAuth } from "~hooks/useAuth";
import { useRetrieveProfile } from "~hooks/useRetrieveProfile";
import { OnboardingModal } from "~views/OnboardingModal";
import { useModal } from "~hooks/useModal";
import { Profile } from "~types/standard";

interface ProfileContextInterface {}

interface ProfileConfig {
  requiredFields: any[];
}

interface ProfileProviderProps extends ContainerProps {
  config: ProfileConfig;
}

const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children, config }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile>();
  const { connectedAddress } = useAuth({ setProfile });
  const {
    showModal: onboardingModalOpen,
    onModalClose: closeOnboardinModal,
    onModalOpen: openOnboardingModal,
  } = useModal();

  const { createProfile, loading } = useRetrieveProfile({
    connectedAddress,
    setProfile,
    onOnboardingRequired: openOnboardingModal,
  });

  const onBoardingComplete = !!profile;

  const values = {
    connectedAddress,
    createProfile,
    profile,
    onBoardingComplete,
    creationLoading: loading,
  };

  return (
    <ProfileContext.Provider value={values}>
      <OnboardingModal
        open={onboardingModalOpen}
        onClose={closeOnboardinModal}
      />
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

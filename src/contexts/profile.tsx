import { createContext, useContext } from "react";
import { ContainerProps } from "~components/mixins";
import { useAuth } from "~hooks/useAuth";
import { useRetrieveProfile } from "~hooks/useRetrieveProfile";
import { OnboardingModal } from "~views/OnboardingModal";
import { useModal } from "~hooks/useModal";

interface ProfileContextInterface {}

interface ProfileConfig {
  requiredFields: any[];
}

interface ProfileProviderProps extends ContainerProps {
  config: ProfileConfig;
}

const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children, config }: ProfileProviderProps) => {
  const { connectedAddress } = useAuth();
  const {
    showModal: onboardingModalOpen,
    onModalClose: closeOnboardinModal,
    onModalOpen: openOnboardingModal,
  } = useModal();

  const { profile, createProfile, loading } = useRetrieveProfile({
    connectedAddress,
    onOnboardingRequired: openOnboardingModal,
  });

  const values = {
    connectedAddress,
    createProfile,
    profile,
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

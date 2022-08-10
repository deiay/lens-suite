import { createContext, useContext, useState } from "react";
import { ContainerProps } from "~components/mixins";
import { useAuth } from "~hooks/useAuth";
import { useRetrieveProfile } from "~hooks/useRetrieveProfile";
import { OnboardingModal } from "~views/OnboardingModal";
import { useModal } from "~hooks/useModal";
import { FieldDefinition, FieldType, Profile } from "~types/standard";
import _ from "lodash";
import { useDisconnect } from "wagmi";

// interface ProfileContextInterface {
//   connectedAddress: string;
//   createProfile;
//   profile;
//   onBoardingComplete;
//   creationLoading: loading;
// }

export interface ProfileConfig {
  requiredFields: FieldType[];
}

interface ProfileProviderProps extends ContainerProps {
  config: ProfileConfig;
}

const ProfileContext = createContext<any>(null);

export const USER_FIELDS = {
  name: {
    readableName: "Name",
    lensKey: "name",
  },
  bio: {
    readableName: "Bio",
    lensKey: "bio",
  },
  email: {
    readableName: "Email",
    lensKey: "attributes.email",
  },
  phoneNumber: {
    readableName: "Phone Number",
    lensKey: "attributes.phone",
  },
  address: {
    readableName: "Address",
    lensKey: "attributes.address",
  },
};

export const ProfileProvider = ({ children, config }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile>();
  const { connectedAddress } = useAuth({ setProfile });
  const { disconnect } = useDisconnect();
  const {
    showModal: onboardingModalOpen,
    onModalClose: closeOnboardinModal,
    onModalOpen: openOnboardingModal,
  } = useModal();

  const { createProfile, loading, error } = useRetrieveProfile({
    connectedAddress,
    setProfile,
    onOnboardingRequired: openOnboardingModal,
  });

  const incompleteFields: FieldDefinition[] = config.requiredFields
    .filter((field) => !_.get(profile, `${USER_FIELDS[field].lensKey}`))
    .map((field) => USER_FIELDS[field]);

  const onBoardingComplete = !incompleteFields.length;

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
        open={
          !!connectedAddress && (onboardingModalOpen || !onBoardingComplete)
        }
        onClose={() => {
          closeOnboardinModal();
          disconnect();
        }}
        incompleteFields={incompleteFields}
        setProfile={setProfile}
        error={error}
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

import { createContext, useEffect } from "react";
import { useAccount } from "wagmi";
import { UseAccountConfig } from "wagmi/dist/declarations/src/hooks/accounts/useAccount";
import { ContainerProps } from "~components/mixins";
import { useAuth } from "src/hooks/useAuth";

interface ProfileContextInterface {}

interface ProfileConfig {
  requiredFields: any[];
}

interface ProfileProviderProps extends ContainerProps {
  config: ProfileConfig;
}

const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children, config }: ProfileProviderProps) => {
  const { authAddress } = useAuth();

  const onConnect: UseAccountConfig["onConnect"] = async ({
    address: _address,
  }) => {
    if (_address) {
      await authAddress(_address);
    }
  };

  const { isConnected, address } = useAccount({ onConnect });

  useEffect(() => {
    if (address) {
    }
  }, [address]);

  const values = {};
  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

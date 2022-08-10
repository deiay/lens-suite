import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "~lib/web3";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Header } from "~components/Header";
import { ProfileConfig, ProfileProvider } from "~contexts/profile";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "~lib/apollo";

const PROFILE_CONFIG: ProfileConfig = {
  requiredFields: ["bio", "name"],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={apolloClient}>
          <ProfileProvider config={PROFILE_CONFIG}>
            <Header />
            <Component {...pageProps} />
          </ProfileProvider>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

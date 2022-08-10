import { useState } from "react";
import type { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card } from "~components/layout/card";
import { PageLayout } from "~components/layout/page-layout";
import { useProfile } from "~contexts/profile";
import { ProfileCard } from "~views/ProfileCard";
import { Box } from "~components/primitives/Box";

const Home: NextPage = () => {
  const { profile, onBoardingComplete } = useProfile();
  return (
    <PageLayout stacked="column" justify="center" align="center">
      <Box spacing="mb4">
        <ConnectButton showBalance={false} />
      </Box>
      {onBoardingComplete && <ProfileCard profile={profile} />}
    </PageLayout>
  );
};

export default Home;

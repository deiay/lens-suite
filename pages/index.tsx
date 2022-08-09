import { useState } from "react";
import type { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "~components/inputs/button";
import { Input } from "~components/inputs/text-input";
import { Card } from "~components/layout/card";
import { PageLayout } from "~components/layout/page-layout";

const Home: NextPage = () => {
  // const [value, setValue] = useState("");
  // <Input value={value} onChange={setValue} />
  //       <Button onClick={() => console.log("clicked")} text="Login" />

  return (
    <PageLayout stacked="column" justify="center" align="center">
      <ConnectButton showBalance={false} />
    </PageLayout>
  );
};

export default Home;

import { useState } from "react";
import { Button } from "~components/inputs/button";
import { Input } from "~components/inputs/text-input";
import { Box } from "~components/primitives/Box";
import { Text } from "~components/typography";
import { useProfile } from "~contexts/profile";

export const CreateProfileForm = () => {
  const { createProfile, creationLoading } = useProfile();
  const [value, setValue] = useState<string>();

  return (
    <Box stacked="column">
      <Text align="center" spacing="mb2" fontColor="black" bold>
        Choose a handle
      </Text>
      <Box stacked="row" spacing="mb2" justify="center">
        <Input value={value} onChange={setValue} />
      </Box>
      <Box stacked="row" spacing="mb2" justify="center">
        <Button
          disabled={!value}
          onClick={() => createProfile(value as string)}
          text="Login"
          loading={creationLoading}
        />
      </Box>
    </Box>
  );
};

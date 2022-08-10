import { useState } from "react";
import { Button } from "~components/inputs/button";
import { Input } from "~components/inputs/text-input";
import { Box } from "~components/primitives/Box";
import { Text } from "~components/typography";
import { FieldDefinition } from "~types/standard";

interface FieldFormProps {
  fieldDefinition: FieldDefinition;
  onUpdate: (value: string) => void;
}

export const FieldForm = ({ fieldDefinition, onUpdate }: FieldFormProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <Box stacked="column">
      <Text align="center" spacing="mb2" fontColor="black" bold>
        Enter your {fieldDefinition.readableName}
      </Text>
      <Box stacked="row" spacing="mb2" justify="center">
        <Input value={value} onChange={setValue} />
      </Box>
      <Box stacked="row" spacing="mb2" justify="center">
        <Button
          disabled={!value}
          onClick={() => {
            onUpdate(value as string);
            setValue("");
          }}
          text="Submit"
        />
      </Box>
    </Box>
  );
};

import styled from "styled-components";
import { Card } from "~components/layout/card";
import { Box } from "~components/primitives/Box";
import { Text } from "~components/typography";
import { Profile } from "~types/standard";

interface ProfileCardProps {
  profile: Profile;
}

const Cell = ({ label, value }: { label: string; value?: string }) => {
  return (
    <Box
      stacked="row"
      spacing={["ph2", "mb2"]}
      gap="12px"
      justify="space-between"
    >
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Box>
  );
};

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card>
      <Box stacked="column" spacing="pv3">
        <Cell label="Handle" value={profile.handle} />
        <Cell label="Name" value={profile.name} />
        <Cell label="Bio" value={profile.bio} />
      </Box>
    </Card>
  );
};

const Label = styled(Text)`
  color: #25292e;
  font-weight: 800;
`;

const Value = styled(Text)`
  color: #25292e;
`;

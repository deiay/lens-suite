import { Card } from "~components/layout/card";
import { Profile } from "~types/standard";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return <Card>{profile.toString()}</Card>;
};

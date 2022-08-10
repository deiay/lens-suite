import { Modal } from "~components/layout/modal";
import { useProfile } from "~contexts/profile";
import { FetchProfile } from "~types/generated";
import { CreateProfileForm } from "~views/CreateProfileForm";

interface OnboardingModalProps {
  open: boolean;
  onClose: () => void;
}

export const OnboardingModal = ({ open, onClose }: OnboardingModalProps) => {
  const { profile } = useProfile();
  return (
    <Modal open={open} onClose={onClose} allowClose={false}>
      {!profile && <CreateProfileForm />}
    </Modal>
  );
};

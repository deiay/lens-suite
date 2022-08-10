import _ from "lodash";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Modal } from "~components/layout/modal";
import { useProfile } from "~contexts/profile";
import { FieldDefinition, Profile } from "~types/standard";
import { CreateProfileForm } from "~views/CreateProfileForm";
import { FieldForm } from "~views/FieldForm";

interface OnboardingModalProps {
  open: boolean;
  onClose: () => void;
  incompleteFields: FieldDefinition[];
  setProfile: Dispatch<SetStateAction<Profile | undefined>>;
}

export const OnboardingModal = ({
  open,
  onClose,
  incompleteFields,
  setProfile,
}: OnboardingModalProps) => {
  const { profile } = useProfile();
  const [unsavedUpdates, setUnsavedUpdates] = useState<Array<[string, string]>>(
    []
  );
  const addUpdates = (lensKey: string) => (value: string) => {
    setUnsavedUpdates((prev) => [...prev, [lensKey, value]]);
  };

  const [nextField] = incompleteFields.filter(
    (field) => !unsavedUpdates.find((update) => update[0] === field.lensKey)
  );

  const submitForm = useCallback(() => {
    const formData = unsavedUpdates.reduce((acc, [lensKey, value]) => {
      // FOR DEMO PURPOSES ONLY
      setProfile((profile?: Profile) => {
        if (!profile) {
          return;
        }

        const newProfile = { ...profile, [lensKey]: value };
        console.log({ newProfile, lensKey, value });
        return newProfile;
      });

      return _.set(acc, lensKey, value);
    }, {});
  }, [unsavedUpdates, setProfile]);

  useEffect(() => {
    const fieldsCompleted = incompleteFields.every((field) =>
      unsavedUpdates.find((update) => update[0] === field.lensKey)
    );

    console.log({
      fieldsCompleted,
      nextField,
      incompleteFields,
      unsavedUpdates,
      profile,
    });

    if (fieldsCompleted) {
      submitForm();
    }
  }, [nextField, submitForm, incompleteFields, unsavedUpdates]);

  if (!nextField) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose} allowClose={false}>
      {!profile && <CreateProfileForm />}
      {profile && nextField && (
        <FieldForm
          fieldDefinition={nextField}
          onUpdate={addUpdates(nextField.lensKey)}
        />
      )}
    </Modal>
  );
};

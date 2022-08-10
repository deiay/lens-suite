import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "~components/layout/modal";
import { useProfile } from "~contexts/profile";
import { FieldDefinition } from "~types/standard";
import { CreateProfileForm } from "~views/CreateProfileForm";
import { FieldForm } from "~views/FieldForm";

interface OnboardingModalProps {
  open: boolean;
  onClose: () => void;
  incompleteFields: FieldDefinition[];
}

export const OnboardingModal = ({
  open,
  onClose,
  incompleteFields,
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

  console.log({ nextField });

  const submitForm = useCallback(() => {
    const formData = unsavedUpdates.reduce((acc, [lensKey, value]) => {
      console.log({ acc });
      return _.set(acc, lensKey, value);
    }, {});

    console.log({ formData });
  }, [unsavedUpdates]);

  useEffect(() => {
    if (
      incompleteFields.every((field) =>
        unsavedUpdates.find((update) => update[0] === field.lensKey)
      )
    ) {
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

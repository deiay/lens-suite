import { ChangeEvent } from "react";
import styled from "styled-components";
import {
  getSpacingRules,
  getStackeeRules,
  SpaceProps,
  StackeeProps,
} from "~components/mixins";

interface InputProps extends StackeeProps, SpaceProps {
  value?: string;
  onChange: (a: string | undefined) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <StyledInput value={value} onChange={handleChange} />;
};

const StyledInput = styled.input<Omit<InputProps, "onChange">>`
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: none;
  color: #25292e;
  font-family: SFRounded, ui-rounded, "SF Pro Rounded", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  ${getSpacingRules} ${getStackeeRules};
`;

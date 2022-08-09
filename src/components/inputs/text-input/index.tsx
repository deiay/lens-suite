import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  value: string;
  onChange: (a: string) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <StyledInput value={value} onChange={handleChange} />;
};

const StyledInput = styled.input``;

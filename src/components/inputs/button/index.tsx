import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type="button">
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

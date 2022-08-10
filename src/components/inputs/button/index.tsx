import styled from "styled-components";
import { SpinnerIcon } from "~components/feedback/spinner";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <>
      {loading ? (
        <SpinnerIcon />
      ) : (
        <StyledButton
          disabled={disabled || loading}
          onClick={!disabled ? onClick : () => {}}
          type="button"
        >
          {text}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button<{ disabled: boolean }>`
  box-shadow: rgba(37, 41, 46, 0.04) 0px 2px 6px 0px;
  background: ${(props) => (props.disabled ? "#ccc" : "#fff")};
  border: none;
  border-radius: 12px;

  color: ${(props) => (props.disabled ? "#5c5b5b" : "#25292e")};

  font-weight: 800;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  ${(props) => (props.disabled ? "" : "cursor: pointer;")}

  &:hover {
    ${(props) => (props.disabled ? "" : "transform: scale(1.05);")}
  }
`;

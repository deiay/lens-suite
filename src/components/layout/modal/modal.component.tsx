import { useBreakPoint, useDisableBodyScroll } from "../../hooks";
import { useMemo } from "react";
import _Modal from "react-modal";
import styled from "styled-components";
import { Box } from "../../primitives/Box";
import { ModalProps } from "./modal.proptypes";
import {
  getBaseModalStyles,
  getFullScreenModalStyles,
} from "./modal.css-rules";
import { Close } from "@styled-icons/ionicons-solid";
import { UnstyledButton } from "../../inputs/unstyled-button";
import { Text } from "../../typography";

const ModalHeader = ({
  title,
  onClose,
  allowClose,
}: Pick<ModalProps, "title" | "onClose" | "allowClose">) => {
  return (
    <Box spacing="p2" stacked="row" justify="space-between" align="center">
      <Box>{title && <_Text bold>{title}</_Text>}</Box>
      {allowClose && (
        <ModalCloseButton onClick={onClose}>
          <CloseIcon />
        </ModalCloseButton>
      )}
    </Box>
  );
};

export const Modal = ({
  open,
  onClose,
  title,
  size = "md",
  children,
  allowClose = true,
}: ModalProps) => {
  const breakpoint = useBreakPoint();

  const modalStyles = useMemo(
    () =>
      breakpoint === "mobile"
        ? getFullScreenModalStyles(size)
        : getBaseModalStyles(size),
    [breakpoint, size]
  );

  useDisableBodyScroll(open, "drawer");

  return (
    <_Modal
      isOpen={open}
      style={modalStyles}
      ariaHideApp={false}
      onRequestClose={allowClose ? onClose : () => {}}
    >
      <ModalContent stacked="column">
        <ModalHeader allowClose={allowClose} title={title} onClose={onClose} />
        <Box stacked="column" spacing="mt4" grow={1}>
          {children}
        </Box>
      </ModalContent>
    </_Modal>
  );
};

const CloseIcon = styled(Close)`
  border-radius: 100%;
  border: rgba(0, 0, 0, 0.04) solid 1px;
  background-color: rgba(0, 0, 0, 0.06);
  color: rgba(60, 66, 66, 0.8);
  height: 28px;
  width: 28px;
  padding: 4px;
  transition: all 0.24s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const ModalContent = styled(Box)`
  background: rgba(60, 66, 66, 0.06);
  min-height: 300px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const ModalCloseButton = styled(UnstyledButton)`
  float: right;
  position: relative;
`;

const _Text = styled(Text)`
  color: ${({ theme }) => theme.mainTextColor};
`;

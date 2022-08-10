import React, { forwardRef, RefObject } from "react";
import styled from "styled-components";
import { UnstyledButtonProps } from "./unstyled-button.proptypes";
import { commonStyles } from "./unstyled-button.css-rules";

const ActualUnstyledButton = styled.button<UnstyledButtonProps>`
  ${commonStyles}
`;

const UnstyledLink = styled.a<UnstyledButtonProps>`
  ${commonStyles}
  display: inline-block;

  &,
  &:hover {
    text-decoration: none;
  }
`;

export const UnstyledButton = forwardRef<HTMLElement, UnstyledButtonProps>(
  (
    { href, target, onClick, type, disabled, ...props }: UnstyledButtonProps,
    ref
  ) =>
    href == null ? (
      // @ts-ignore
      <ActualUnstyledButton
        onClick={onClick}
        type={type ?? "button"}
        {...props}
        ref={ref as RefObject<HTMLButtonElement>}
        disabled={disabled}
      />
    ) : (
      // @ts-ignore
      <UnstyledLink
        href={href}
        target={target}
        rel={target?.length ? "noreferrer noopener" : undefined}
        onClick={onClick}
        {...props}
        ref={ref as RefObject<HTMLAnchorElement>}
      />
    )
);

UnstyledButton.displayName = "UnstyledButton";

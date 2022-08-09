import styled from "styled-components";
import { ContainerProps } from "~components/mixins";
import { Box } from "~components/primitives/Box";
import { BoxProps } from "~components/primitives/Box/box.proptypes";

interface PageLayoutProps extends ContainerProps, BoxProps {}

export const PageLayout = ({ children, ...boxProps }: PageLayoutProps) => {
  return <_PageLayout {...boxProps}>{children}</_PageLayout>;
};

const _PageLayout = styled(Box)`
  overflow-x: hidden;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
`;

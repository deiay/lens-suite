import styled from "styled-components";
import { ContainerProps } from "~components/mixins";
import { Box } from "../../primitives/Box";

interface CardProps extends ContainerProps {}

export const Card = ({ children }: CardProps) => {
  return (
    <StyledCard>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

const CardContent = styled(Box)`
  height: 100%;
  width: 100%;
  background: rgba(60, 66, 66, 0.06);
`;

const StyledCard = styled(Box)`
  border: solid 1px #ccc;
  border-radius: 5px;
  max-width: 500px;
  background-color: #fff;
`;

import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  elevation: 2;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BLACK};
  z-index: 999;
`;

import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledLoaderContainer = styled.div`
  .loader {
    border: 4px solid ${colors.GREY};
    border-top: 4px solid ${colors.RED};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    z-index: 1000;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

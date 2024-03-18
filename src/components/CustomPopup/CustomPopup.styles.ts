import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledPopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BLACK};
  z-index: 100;
  .popup-body {
    width: 380px;
    height: 200px;
    background-color: ${colors.WHITE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 4px solid ${colors.RED};
    padding: 30px;

    h1 {
      margin-bottom: 10px;
    }
    button {
      padding: 10px 30px;
      background-color: ${colors.RED};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: ${colors.WHITE};
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;

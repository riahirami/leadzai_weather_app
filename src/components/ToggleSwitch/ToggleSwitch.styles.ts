import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledToggleSwitch = styled("div")`
  .toggle-switch {
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .toggle-switch-checkbox {
    display: none;
  }
  .toggle-switch-label {
    display: block;
    width: 50px;
    height: 24px;
    background: ${colors.WHITE};
    border-radius: 24px;
    position: relative;
    cursor: pointer;
  }

  .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-inner {
    left: 28px;
  }
  .toggle-switch-switch {
    display: block;
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    border-radius: 20px;
    background: ${colors.GREEN};
    position: absolute;
    box-shadow: 0 0 5px 0 ${colors.BLACK};
    transition: left 0.3s;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-switch {
    left: 28px;
  }

  .toggle-switch p {
    font-size: 16px;
    font-weight: 500;
  }

  @media screen and (max-width: 991px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 767px) {
    transform: scale(0.825);
  }
  @media screen and (max-width: 575px) {
    transform: scale(0.75);
  }
`;

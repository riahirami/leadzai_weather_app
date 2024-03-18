import styled from "styled-components";
import { StyledHomeContainerProps } from "./home.type";

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHomeContainer = styled.div<StyledHomeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  height: 100vh;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 100vh;

  @media screen and (max-width: 300px) {
    /* Adjust background properties for screens less than 300px wide */
    background-size: cover;
  }
`;

export const StyledWeatherDetailsContainer = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 18px;
  padding: 16px;
`;

export const StyledTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

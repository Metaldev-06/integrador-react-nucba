import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 95%;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  gap: 1rem;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  z-index: -1;

  img {
    width: 800px;
    object-fit: cover;
  }
`;

export const RedesSociales = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 5rem;

  span {
    cursor: pointer;
  }
`;

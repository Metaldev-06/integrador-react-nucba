import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  padding: 1rem 3rem;
  border: 1px solid #f44336;
  border-radius: 2rem;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-weight: bold;
  transition: all 1s ease-in-out;

  &:hover {
    background: rgb(255, 108, 50);
    background: -moz-linear-gradient(
      270deg,
      rgba(255, 108, 50, 1) 0%,
      rgba(254, 49, 70, 1) 100%
    );
    background: -webkit-linear-gradient(
      270deg,
      rgba(255, 108, 50, 1) 0%,
      rgba(254, 49, 70, 1) 100%
    );
    background: linear-gradient(
      270deg,
      rgba(255, 108, 50, 1) 0%,
      rgba(254, 49, 70, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6c32",endColorstr="#fe3146",GradientType=1);
  }
`;

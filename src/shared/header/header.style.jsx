import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #161515;
  position: fixed;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  width: 95%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 2.5rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Li = styled.li`
  cursor: pointer;
  transition: all 3s ease-in-out;

  &:hover {
    color: #f2f2f2;
    font-weight: bold;
  }
`;

export const Cart = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

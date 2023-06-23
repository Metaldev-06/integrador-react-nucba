import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Ul,
  Cart,
  Li,
} from "./header.style";
import { FaHamburger } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

function Header() {
  const navMenu = ["Home", "About", "Menu", "Contact"];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <FaHamburger />
        </Logo>

        <Ul>
          {navMenu.map((item, index) => (
            <Li key={index}>{item}</Li>
          ))}
        </Ul>

        <Cart>
          <BsFillCartFill />
        </Cart>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

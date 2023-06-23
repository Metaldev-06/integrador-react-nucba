import { Button } from "../../../shared/components/button/button.style";
import {
  HeroContainer,
  ImageContainer,
  HeroContent,
  RedesSociales,
} from "./hero.style";
import heroImage from "../../../assets/hero.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Food Quality</h1>

        <p>
          At Food Quality, we believe in the importance of quality and taste.
          Each burger is prepared with meticulousness, from selecting the finest
          meats to combining perfectly balanced flavors and seasonings. Our goal
          is to provide you with burgers that are juicy, flavorful, and
          satisfying with every bite.
        </p>

        <Button>Read More</Button>

        <RedesSociales>
          <span>
            <BiLogoFacebook /> Facebook
          </span>
          <span>
            <BsTwitter /> Twitter
          </span>
          <span>
            <FaInstagram /> Instagram
          </span>
        </RedesSociales>
      </HeroContent>

      <ImageContainer>
        <img src={heroImage} alt="" />
      </ImageContainer>
    </HeroContainer>
  );
}

export default Hero;

import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

import { SocialMediaLinks } from "../../constants/constants";

const Header = () => {
  const { Instagram, LinkedIn, GitHub } = SocialMediaLinks;
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons target="_blank" href={GitHub.link}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href={LinkedIn.link}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href={Instagram.link}>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;

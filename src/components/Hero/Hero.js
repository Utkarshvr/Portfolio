import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am{" "}
          {/* <div
            style={{
              display: "inline-flex",
              width: "40px",
              height: "40px",
              borderRadius: 100,
              border: "2px solid #fff",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", borderRadius: "100%" }}
              src="/images/profile.jpg"
              alt="Profile Pic"
            />
          </div> */}
          <br />A Web Developer
        </SectionTitle>
        <SectionText>
          <strong style={{ fontWeight: 700 }}>👋 Hi, I'm Utkarsh!</strong>
          <br />A 17-year-old aspiring Full Stack Web Developer, currently
          balancing studies while working on projects using the MERN stack
          wonders with the MERN stack. 🚀
          <br />
          I've already dabbled in the world of freelancing, where I brought
          captivating frontend experiences to life. 🌟
          <br />
          Explore my digital playground and witness the future of web
          development in the making!
        </SectionText>
        <Link href="#about">
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

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
          My name is <strong style={{ fontWeight: 700 }}>Utkarsh</strong> and I
          am a{" "}
          <strong style={{ fontWeight: 700 }}>MERN Stack Developer.</strong>{" "}
          <br />I am{" "}
          <strong style={{ fontWeight: 700 }}>
            {" "}
            17 y/o (11<sup>th</sup> Std - PCM)
          </strong>{" "}
          and I have been practicing Web Development from 3 years.
        </SectionText>
        <Link href="#about">
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

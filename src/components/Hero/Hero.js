// import dynamic from "next/dynamic";

// const ReactMarkdown = dynamic(() => import("react-markdown"));

import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import { heroText, heroTitle } from "../../constants/constants";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection style={{ display: "flex" }} className="relative">
        <div>
          <SectionTitle main center>
            {/* <ReactMarkdown className="child-p-mb-0">{heroTitle}</ReactMarkdown> */}
            {heroTitle}
          </SectionTitle>
          <SectionText>
            {/* <ReactMarkdown>{heroText}</ReactMarkdown> */}
            {heroText}
          </SectionText>

          <Link href="#about">
            <Button onClick={props.handleClick}>Learn More</Button>
          </Link>
        </div>

        <div style={{ position: "absolute", top: 0, right: 0, zIndex: -999 }}>
          <div
            style={{ position: "relative", width: "180px", height: "180px" }}
          >
            <img
              src="/images/profile.jpg"
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the entire container
              }}
              alt="Profile"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.4)",
                borderRadius: "100%",
              }}
            ></div>
          </div>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

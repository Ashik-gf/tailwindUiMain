import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SimpleCentered from "./Simple centered";
import SplitWithScreenshotonDark from "./Split with screenshot";
import SplitWithScreenshot from "./Split with screenshot on dark";
import SplitWithCodeExample from "./Split with code example";
import SimpleCenteredWithBackgroundImage from "./Simple centered with background image";
import WithAppScreenshot from "./With app screenshot";
import WithAppScreenshotonDark from "./With app screenshot on dark";
import WithPhoneMockup from "./With phone mockup";
import SplitWithImage from "./Split with image";
import WithAngledImageOnRight from "./With angled image on right";
import WithImageTiles from "./With image tiles";
import WithOffsetImage from "./With offset image";

const HeroSection = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={"Hero Sections"} tag={"Page Section"} />
      <HeaderSection title={"Simple centered"}>
        <div className=" mx-2 my-4">
          <SimpleCentered />
        </div>
      </HeaderSection>
      {/* Split with screenshot on dark */}
      <HeaderSection title={"Split with screenshot on dark"}>
        <div className=" mx-2 my-4">
          <SplitWithScreenshotonDark />
        </div>
      </HeaderSection>
      {/* SplitWithScreenshot */}
      <HeaderSection title={"SplitWithScreenshot"}>
        <div className=" mx-2 my-4">
          <SplitWithScreenshot />
        </div>
      </HeaderSection>
      {/*Split with code example */}
      <HeaderSection title={"Split with code example"}>
        <div className=" mx-2 my-4">
          <SplitWithCodeExample />
        </div>
      </HeaderSection>
      {/*Simple centered with background image */}
      <HeaderSection title={"Simple centered with background image"}>
        <div className=" mx-2 my-4">
          <SimpleCenteredWithBackgroundImage />
        </div>
      </HeaderSection>
      {/*With app screenshot */}
      <HeaderSection title={"With app screenshot"}>
        <div className=" mx-2 my-4">
          <WithAppScreenshot />
        </div>
      </HeaderSection>
      {/*With app screenshot on dark */}
      <HeaderSection title={"With app screenshot on dark"}>
        <div className=" mx-2 my-4">
          <WithAppScreenshotonDark />
        </div>
      </HeaderSection>
      {/*With phone mockup */}
      <HeaderSection title={"With phone mockup"}>
        <div className=" mx-2 my-4">
          <WithPhoneMockup />
        </div>
      </HeaderSection>
      {/*Split with image */}
      <HeaderSection title={"Split with image"}>
        <div className=" mx-2 my-4">
          <SplitWithImage />
        </div>
      </HeaderSection>
      {/*With angled image on right */}
      <HeaderSection title={"With angled image on right"}>
        <div className=" mx-2 my-4">
          <WithAngledImageOnRight />
        </div>
      </HeaderSection>
      {/*With image tiles */}
      <HeaderSection title={"With image tiles"}>
        <div className=" mx-2 my-4">
          <WithImageTiles />
        </div>
      </HeaderSection>
      {/*With offset image */}
      <HeaderSection title={"With offset image"}>
        <div className=" mx-2 my-4">
          <WithOffsetImage />
        </div>
      </HeaderSection>
      
    </div>
  );
};

export default HeroSection;

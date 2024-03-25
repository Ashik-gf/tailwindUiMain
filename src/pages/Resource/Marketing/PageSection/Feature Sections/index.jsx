import React from "react";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import WithProductScreenshot from "./With product screenshot";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import Centered22Grid from "./Centered 2x2 grid";
import WithLargeScreenshotOnDark from "./With large screenshot on dark";
import WithLargeScreenshot from "./With large screenshot";
import SimpleThreeColumnWithSmallIconsOnDark from "./Simple three column with small icons";
import SimpleThreeColumnWithSmallIcons from "./Simple three column with small icons";
import WithProductScreenshotOnDark from "./With product screenshot on dark";
import SimpleThreeColumnWithLargeIconsOnDark from "./Simple three column with large icons";
import SimpleThreeColumnWithLargeIcons from "./Simple three column with large icons";
import ContainedInPanel from "./Contained in panel";
import WithProductScreenshotPanel from "./With product screenshot panel";
import WithTestimonial from "./With testimonial";
import Offset2x2Grid from "./Offset 2x2 grid";
import WithCodeExamplePanel from "./With code example panel";
import OffsetWithFeatureList from "./Offset with feature list";
import Simple from "./Simple";
import SimpleTwo_olumnWithSmallIconsOnDark from "./Simple two-column with small icons on dark";

const FutureSection = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={"Feature Sections"} tag={"Page Section"} />
      <FirstHeaderSection title={"With product screenshot"}>
        <div className="div">
          <WithProductScreenshot />
        </div>
      </FirstHeaderSection>
      <HeaderSection title={"With product screenshot"}>
        <div className="div">
          <Centered22Grid />
        </div>
      </HeaderSection>
      {/* With large screenshot on dark */}
      <HeaderSection title={"With large screenshot on dark"}>
        <div className="div">
          <WithLargeScreenshotOnDark />
        </div>
      </HeaderSection>
      {/* With large screenshot */}
      <HeaderSection title={"With large screenshot"}>
        <div className="div">
          <WithLargeScreenshot />
        </div>
      </HeaderSection>
      {/* Simple three column with small icons on dark */}
      <HeaderSection title={"Simple three column with small icons on dark"}>
        <div className="div">
          <SimpleThreeColumnWithSmallIconsOnDark />
        </div>
      </HeaderSection>
      {/* Simple three column with small icons */}
      <HeaderSection title={"Simple three column with small icons"}>
        <div className="div">
          <SimpleThreeColumnWithSmallIcons />
        </div>
      </HeaderSection>
      {/* With product screenshot on dark */}
      <HeaderSection title={"With product screenshot on dark"}>
        <div className="div">
          <WithProductScreenshotOnDark />
        </div>
      </HeaderSection>
      {/* Simple three column with large icons on dark */}
      <HeaderSection title={"Simple three column with large icons on dark"}>
        <div className="div">
          <SimpleThreeColumnWithLargeIconsOnDark />
        </div>
      </HeaderSection>
      {/* Simple three column with large icons */}
      <HeaderSection title={"Simple three column with large icons"}>
        <div className="div">
          <SimpleThreeColumnWithLargeIcons />
        </div>
      </HeaderSection>
      {/* Contained in panel */}
      <HeaderSection title={"Contained in panel"}>
        <div className="div">
          <ContainedInPanel />
        </div>
      </HeaderSection>
      {/* With product screenshot panel */}
      <HeaderSection title={"With product screenshot panel"}>
        <div className="div">
          <WithProductScreenshotPanel />
        </div>
      </HeaderSection>
      {/* With testimonial */}
      <HeaderSection title={"With testimonial"}>
        <div className="div">
          <WithTestimonial />
        </div>
      </HeaderSection>
      {/* Offset 2x2 Grid */}
      <HeaderSection title={"Offset 2x2 Grid"}>
        <div className="div">
          <Offset2x2Grid />
        </div>
      </HeaderSection>
      {/* With code example panel */}
      <HeaderSection title={"With code example panel"}>
        <div className="div">
          <WithCodeExamplePanel />
        </div>
      </HeaderSection>
      {/* Offset with feature list */}
      <HeaderSection title={"Offset with feature list"}>
        <div className="div">
          <OffsetWithFeatureList />
        </div>
      </HeaderSection>
      {/* Simple */}
      <HeaderSection title={"Simple"}>
        <div className="div">
          <Simple />
        </div>
      </HeaderSection>
      {/* SimpleTwo_olumnWithSmallIconsOnDark */}
      <HeaderSection title={"Simple Two_olumn With Small Icons On Dark"}>
        <div className="div">
          <SimpleTwo_olumnWithSmallIconsOnDark />
        </div>
      </HeaderSection>
      {/*  */}
    </div>
  );
};

export default FutureSection;

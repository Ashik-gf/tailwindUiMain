import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import WithSmallImages from "./With small images";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import WithLargeImages from "./With large images";
import GridwithRoundImages from "./Grid with round images";
import DarkVersion from "./Dark version with large images";
import WithImageAndShortParagraph from "./With image and short paragraph";
import WithVerticalImages from "./With vertical images";
import FullWidth from "./Full width with vertical images";
import GridRoundImage from "./Grid with large round images";
import WithMediumDark from "./With medium images on dark";

const TeamSections = () => {
  return (
    <div>
      <MainHeaderSection title={"Team Sections"} tag={"Page Section"} />
      <FirstHeaderSection title={"With small images"}>
        <div className="border-[2px] border-gray-200 rounded-md">
          <WithSmallImages />
        </div>
      </FirstHeaderSection>
      {/*  */}
      <HeaderSection title={'With large images'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <WithLargeImages />
        </div>
      </HeaderSection>
      {/* Grid with round images */}
      <HeaderSection title={'Grid with round images'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <GridwithRoundImages />
        </div>
      </HeaderSection>
      {/* Dark version with large images */}
      <HeaderSection title={'Dark version with large images'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <DarkVersion />
        </div>
      </HeaderSection>
      {/* With image and short paragraph */}
      <HeaderSection title={'With image and short paragraph'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <WithImageAndShortParagraph />
        </div>
      </HeaderSection>
      {/* With vertical images */}
      <HeaderSection title={'With vertical images'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <FullWidth />
        </div>
      </HeaderSection>
      {/* Grid with large round images */}
      <HeaderSection title={'Grid with large round images'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <GridRoundImage />
        </div>
      </HeaderSection>
      {/* With medium images on dark */}
      <HeaderSection title={'With medium images on dark'}>
      <div className="border-[2px] border-gray-200 rounded-md">
          <WithMediumDark />
        </div>
      </HeaderSection>
    </div>
  );
};

export default TeamSections;

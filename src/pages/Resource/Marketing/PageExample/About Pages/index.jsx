import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import With_image_tiles from "./With image tiles";
import With_timeline_and_stats from "./With timeline and stats";
import Dark from "./Dark";
import With_overlapping_cards from "./With overlapping cards";
import Split_with_pattern_and_addresses from "./Split with pattern and addresses";
import Split_with_image_and_centered_CTA_section from "./Split with image and centered CTA section";

const AboutPages = () => {
  return (
    <div>
      <MainHeaderSection
        title={"About Pages"}
        section={"Marketing"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With Image Title"}>
        <div className="border-2 border-gray-200 rounded-lg">
          <With_image_tiles />
        </div>
      </FirstHeaderSection>
      <HeaderSection title={"With timeline and stats"}>
        <div className="border-2 border-gray-100 rounded-lg">
          <With_timeline_and_stats />
        </div>
      </HeaderSection>
      {/* Dark */}
      <HeaderSection title={"Dark"}>
        <div className="border-2 border-gray-100 rounded-lg">
          <Dark />
        </div>
      </HeaderSection>
      {/* With overlapping cards*/}
      <HeaderSection title={"With overlapping cards"}>
        <div className="border-2 border-gray-100 rounded-lg">
          <With_overlapping_cards />
        </div>
      </HeaderSection>
      {/* Split with pattern and addresses*/}
      <HeaderSection title={"Split with pattern and addresses"}>
        <div className="border-2 border-gray-100 rounded-lg">
          <Split_with_pattern_and_addresses />
        </div>
      </HeaderSection>
      {/* Split with image and centered CTA section*/}
      <HeaderSection title={"Split with image and centered CTA section"}>
        <div className="border-2 border-gray-100 rounded-lg">
          <Split_with_image_and_centered_CTA_section />
        </div>
      </HeaderSection>
    </div>
  );
};

export default AboutPages;

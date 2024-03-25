import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import With_screenshots_and_stats from "./With screenshots and stats";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import With_large_screenshot_and_testimonial from "./With large screenshot and testimonial";
import With_background_image_hero_and_pricing_section from "./With background image hero and pricing section";
import With_mobile_screenshot_and_testimonials_grid from "./With mobile screenshot and testimonials grid";
import Simple_with_offset_screenshot_hero from "./Simple with offset screenshot hero";
import Illustrated_hero_with_screenshot_section from "./Illustrated hero with screenshot section";

const LandingPage = () => {
  return (
    <div>
      <MainHeaderSection
        title={"Landing Pages"}
        section={"Marketing"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With screenshots and stats"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_screenshots_and_stats />
        </div>
      </FirstHeaderSection>
      {/* With large screenshot and testimonial */}
      <HeaderSection title={"With large screenshot and testimonial"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_large_screenshot_and_testimonial />
        </div>
      </HeaderSection>
      {/* With background image hero and pricing section */}
      <HeaderSection title={"With background image hero and pricing section"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_background_image_hero_and_pricing_section />
        </div>
      </HeaderSection>
      {/* With_mobile_screenshot_and_testimonials_grid */}
      <HeaderSection title={"With mobile screenshot and testimonials grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_mobile_screenshot_and_testimonials_grid />
        </div>
      </HeaderSection>
      <HeaderSection title={"Simple_with_offset_screenshot_hero"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <Simple_with_offset_screenshot_hero />
        </div>
      </HeaderSection>
      <HeaderSection title={"Illustrated hero with screenshot section"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <Illustrated_hero_with_screenshot_section />
        </div>
      </HeaderSection>
    </div>
  );
};

export default LandingPage;

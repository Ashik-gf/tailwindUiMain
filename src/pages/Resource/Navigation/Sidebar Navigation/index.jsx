import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Brand from "./Brand";
import Dark from "./Dark";
import Light from "./Light";
import WithExpandableSections from "./With expandable sections";
import WithSecondaryNavigation from "./With secondary navigation";
import SimpleWithIconsAndBadges from "./Simple with icons and badges";
import SimpleWithiconsAndBrandColor from "./Simple with icons and brand color";
import SimpleWithIconsBadgesAndProfileSectionPreview from "./Simple with icons, badges, and profile section Preview";
import WithExpandableSections2 from "./With expandable sections2";
import WithIconsAndExpandableSections from "./With icons and expandable sections";
import WithSecondaryNavigation2 from "./With secondary navigation2";

const SidebarNavigation = () => {
  return (
    <div>
      <MainHeaderSection tag={"Navigaton"} />
      {/* Dark */}
      <HeaderSection title={"Brand"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <Brand />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* Dark */}
      <HeaderSection title={"Dark"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <Dark />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* Light */}
      <HeaderSection title={"Light"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <Light />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* With expandable sections */}
      <HeaderSection title={"With expandable sections"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithExpandableSections />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* With secondary navigation */}
      <HeaderSection title={"With secondary navigation"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithSecondaryNavigation />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* Simple With Icons And Badges */}
      <HeaderSection title={"Simple With Icons And Badges"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <SimpleWithIconsAndBadges />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* Simple Withicons And Brand Color */}
      <HeaderSection title={"Simple Withicons And Brand Color"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <SimpleWithiconsAndBrandColor />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* Simple With Icons Badges And Profile Section Preview */}
      <HeaderSection title={"Simple With Icons Badges And Profile Section Preview"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <SimpleWithIconsBadgesAndProfileSectionPreview />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/* With Expandable Sections */}
      <HeaderSection title={"With Expandable Sections"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <SimpleWithIconsBadgesAndProfileSectionPreview />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/*With Expandable Sections2 */}
      <HeaderSection title={"With Expandable Sections2"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithExpandableSections2 />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/*WithIcons and Expandable Sections */}
      <HeaderSection title={"WithIcons and Expandable Sections"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithIconsAndExpandableSections />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/*With Secondary Navigation */}
      <HeaderSection title={"With Secondary Navigation"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithSecondaryNavigation />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/*With Secondary Navigation2 */}
      <HeaderSection title={"With Secondary Navigation2"}>
        <div className="flex justify-center items-center">
          <div className=" w-[330px] h-full rounded-lg">
            <WithSecondaryNavigation2 />
          </div>
          <div className=" w-full h-full"></div>
        </div>
      </HeaderSection>
      {/*  */}
    </div>
  );
};

export default SidebarNavigation;

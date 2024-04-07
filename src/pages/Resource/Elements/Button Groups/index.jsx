import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Basic from "./Basic";
import IconOnly from "./Icon only";
import WithStat from "./With stat";
import WithDropdown from "./With dropdown";
import WithCheckboxAndDropdown from "./With checkbox and dropdown";

const ButtonGroup = () => {
  return (
    <div>
      <MainHeaderSection title={"ButtonGroup"} tag={"Elements"} />
      {/* Basic */}
      <HeaderSection 
       className={" py-8 sm:py-24 px-40 md:px-[200px] lg:px-[500px]"}
      title={"Basic"}>
        <Basic />
      </HeaderSection>
      {/*Icon only */}
      <HeaderSection  className={" py-8 sm:py-24 px-40  md:px-[200px] lg:px-[500px]"} title={"Icon only"}>
        <IconOnly />
      </HeaderSection>
      {/*With stat */}
      <HeaderSection  className={" py-8 sm:py-24 px-40 md:px-[200px] lg:px-[500px]"} title={"With stat"}>
        <WithStat />
      </HeaderSection>
      {/*With dropdown */}
      <HeaderSection  className={" h-[250px] py-8 sm:py-24 px-40 md:px-[200px] lg:px-[500px]"} title={"With dropdown"}>
        <WithDropdown />
      </HeaderSection>
      {/*With checkbox and dropdown */}
      <HeaderSection  className={" h-[150px] py-8 sm:py-24 px-40 md:px-[200px] lg:px-[500px]"} title={"With checkbox and dropdown"}>
        <WithCheckboxAndDropdown />
      </HeaderSection>
    </div>
  );
};

export default ButtonGroup;

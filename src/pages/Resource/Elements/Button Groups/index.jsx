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
      <HeaderSection title={"Basic"}>
        <div className=" flex justify-center py-12">
          <Basic />
        </div>
      </HeaderSection>
      {/*Icon only */}
      <HeaderSection title={"Icon only"}>
        <div className=" flex justify-center py-12">
          <IconOnly />
        </div>
      </HeaderSection>
      {/*With stat */}
      <HeaderSection title={"With stat"}>
        <div className=" flex justify-center py-12">
          <WithStat />
        </div>
      </HeaderSection>
      {/*With dropdown */}
      <HeaderSection title={"With dropdown"}>
        <div className=" flex justify-center py-12">
          <WithDropdown />
        </div>
      </HeaderSection>
      {/*With checkbox and dropdown */}
      <HeaderSection title={"With checkbox and dropdown"}>
        <div className=" flex justify-center py-12">
          <WithCheckboxAndDropdown />
        </div>
      </HeaderSection>
    </div>
  );
};

export default ButtonGroup;

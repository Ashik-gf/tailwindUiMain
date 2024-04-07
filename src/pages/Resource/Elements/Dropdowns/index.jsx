import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import Simple from "./Simple";
import WithDividers from "./With dividers";
import WithIcons from "./With icons";
import WithMinimalMenuIcon from "./With minimal menu icon";

const DropDown = () => {
  return (
    <div>
      <MainHeaderSection
        tag={"Elements"}
        goto={"applicationui"}
        title={"DropDown"}
        section={"Application UI"}
      />
      <FirstHeaderSection title={"Simple"}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <Simple />
        </div>
      </FirstHeaderSection>
      {/* With dividers */}
      <HeaderSection
        className={"h-[380px] py-4 px-48 sm:px-[300px]"}
        title={"With dividers"}
      >
        <WithDividers />
      </HeaderSection>
      {/* With icons */}
      <HeaderSection
        className={"h-[380px] py-4 px-48 sm:px-[300px]"}
        title={"With icons"}
      >
        <WithIcons />
      </HeaderSection>
      {/* With minimal menu icon */}
      <HeaderSection
        className={"h-[380px] py-4 px-60 sm:px-[300px]"}
        title={"With minimal menu icon"}
      >
        <WithMinimalMenuIcon />
      </HeaderSection>
      {/* With simple header */}
      <HeaderSection
      className={'h-[380px] py-4 px-60 sm:px-[300px]'}
      title={"With simple header"}>
        <WithMinimalMenuIcon />
      </HeaderSection>
    </div>
  );
};

export default DropDown;

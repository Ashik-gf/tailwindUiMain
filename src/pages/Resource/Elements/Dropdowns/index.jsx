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
      <MainHeaderSection tag={"Elements"} title={"DropDown"} />
      <FirstHeaderSection title={'Simple'}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <Simple />
        </div>
      </FirstHeaderSection>
      {/* With dividers */}
      <HeaderSection title={"With dividers"}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <WithDividers />
        </div>
      </HeaderSection>
      {/* With icons */}
      <HeaderSection title={"With icons"}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <WithIcons />
        </div>
      </HeaderSection>
      {/* With minimal menu icon */}
      <HeaderSection title={"With minimal menu icon"}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <WithMinimalMenuIcon />
        </div>
      </HeaderSection>
      {/* With simple header */}
      <HeaderSection title={"With simple header"}>
        <div className="div h-[300px] flex justify-center py-12 border-2 border-gray-100">
          <WithMinimalMenuIcon />
        </div>
      </HeaderSection>
    </div>
  );
};

export default DropDown;

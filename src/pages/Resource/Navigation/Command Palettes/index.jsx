import React from "react";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import Simple from "./Simple";
import SimpleWithPadding from "./Simple with padding";

const CommandPalettes = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} title={"Command Palettes"} tag={"Navigation"} />
      <HeaderSection title={"Simple"}>
        <div className="mx-64 my-2 ">
          <Simple />
        </div>
      </HeaderSection>
      <HeaderSection title={"Simple"}>
        <div className="mx-64 my-2 ">
          <SimpleWithPadding />
        </div>
      </HeaderSection>
    </div>
  );
};

export default CommandPalettes;

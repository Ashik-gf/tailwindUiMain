import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Stacked from "./Stacked";
import StackedOnDark from "./Stacked on dark";
import TwoColumn from "./Two-column";
import TwoColumnWithCards from "./Two-column with cards";
import LabelsonLeft from "./Labels on left";

const FromsLayout = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Froms'} title={"Form Layouts"} />
      {/* Stacked */}
      <HeaderSection title={"Stacked"}>
        <div className=" sm:mx-32">
          <Stacked />
        </div>
      </HeaderSection>

      {/* Stacked on dark */}
      <HeaderSection className={'p-0'} title={"Stacked on dark"}>
       <div className=" w-full bg-gray-800 rounded-md">
       <div className=" sm:mx-32 p-4">
          <StackedOnDark />
        </div>
       </div>
      </HeaderSection>
      {/* Two-column */}
      <HeaderSection className={'p-0'} title={"Two-column"}>
       <div className=" w-full rounded-md">
       <div className=" sm:mx-8 p-4">
          <TwoColumn />
        </div>
       </div>
      </HeaderSection>
      {/* Two-column with cards */}
      <HeaderSection className={'p-0'} title={"Two-column with cards"}>
       <div className=" w-full rounded-md">
       <div className=" sm:mx-8 p-4">
          <TwoColumnWithCards />
        </div>
       </div>
      </HeaderSection>
      {/* Labels on left */}
      <HeaderSection className={'p-0'} title={"Labels on left"}>
       <div className=" w-full rounded-md">
       <div className=" sm:mx-8 p-4">
          <LabelsonLeft />
        </div>
       </div>
      </HeaderSection>
    </div>
  );
};

export default FromsLayout;

import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import SimpleList from "./Simple list";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SimpleInlineList from "./Simple inline list";
import ListWithDescription from "./List with description";
import ListWithinlineDescription from "./List with inline description";
import ListWithRadioOnRight from "./List with radio on right";
import SimpleListWithRadioOnRight from "./Simple list with radio on right";
import ColorPicker from "./Color picker";
import Cards from "./Cards";
import SmallCards from "./Small cards";
import StackedCards from "./Stacked cards";
import SimpleTable from "./Simple table";
import ListWithDescriptionsInpanel from "./List with descriptions in panel";

const RadioGroups = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"appui"}
        section={"Application UI"}
        tag={"Froms"}
        title={"Radio Groups"}
      />
      <FirstHeaderSection
        className={" w-full rounded-lg"}
        title={"Simple list"}
      >
        <div className=" px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <SimpleList />
        </div>
      </FirstHeaderSection>
      {/* Simple inline list */}
      <HeaderSection title={"Simple inline list"}>
        <div className=" px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <SimpleInlineList />
        </div>
      </HeaderSection>
      {/* List with description */}
      <HeaderSection title={"List with description"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <ListWithDescription />
        </div>
      </HeaderSection>
      {/* List with inline description */}
      <HeaderSection title={"List with inline description"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <ListWithinlineDescription />
        </div>
      </HeaderSection>
      {/* List with radio on right */}
      <HeaderSection title={"List with radio on right"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <ListWithRadioOnRight />
        </div>
      </HeaderSection>
      {/* Simple list with radio on right */}
      <HeaderSection title={"Simple list with radio on right"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <SimpleListWithRadioOnRight />
        </div>
      </HeaderSection>
      {/* Color picker */}
      <HeaderSection title={"Color picker"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <ColorPicker />
        </div>
      </HeaderSection>
      {/* Cards */}
      <HeaderSection title={"Cards"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <Cards />
        </div>
      </HeaderSection>
      {/* Small cards */}
      <HeaderSection title={"Small cards"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <SmallCards />
        </div>
      </HeaderSection>
      {/* Stacked cards */}
      <HeaderSection title={"Stacked cards"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <StackedCards />
        </div>
      </HeaderSection>
      {/* Simple table */}
      <HeaderSection title={"Simple table"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <SimpleTable />
        </div>
      </HeaderSection>
      {/* ListWithDescriptionsInPanel */}
      <HeaderSection title={"List With Descriptions in Panel"}>
        <div className="px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <ListWithDescriptionsInpanel />
        </div>
      </HeaderSection>
    </div>
  );
};

export default RadioGroups;

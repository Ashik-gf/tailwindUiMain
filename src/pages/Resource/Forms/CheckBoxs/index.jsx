import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import ListWithDescription from "./List with description";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import ListWithInlineDescription from "./List with inline description";
import ListWithCheckboxOnRight from "./List with checkbox on right";
import SimpleListWithHeading from "./Simple list with heading";

const CheckBoxs = () => {
  return (
    <div>
      <MainHeaderSection tag={'Froms'} title={"Checkboxes"} />
      <FirstHeaderSection title={"List with description"}>
        <div className="mx-72 my-[50px]">
          <ListWithDescription />
        </div>
      </FirstHeaderSection>
      {/* List with inline description */}
      <HeaderSection title={"List with inline description"}>
        <div className="mx-72 my24">
          <ListWithInlineDescription />
        </div>
      </HeaderSection>
      {/* List with checkbox on right */}
      <HeaderSection title={"List with checkbox on right"}>
        <div className="mx-72 my24">
          <ListWithCheckboxOnRight />
        </div>
      </HeaderSection>
      {/* Simple list with heading */}
      <HeaderSection title={"Simple list with heading"}>
        <div className="mx-72 my24">
          <SimpleListWithHeading />
        </div>
      </HeaderSection>





    </div>
  );
};

export default CheckBoxs;

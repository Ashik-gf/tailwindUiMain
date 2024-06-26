import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import SimpleToggle from "./Simple toggle";
import ShortToggle from "./Short toggle";
import ToggleWithIcon from "./Toggle with icon";
import WithLeftLabelAndDescription from "./With left label and description";
import WithRightLabel from "./With right label";

const Togols = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"appui"}
        section={"Application UI"}
        tag={"Froms"}
        title={"Toggles"}
      />
      <FirstHeaderSection title={"Simple toggle"}>
        <div className=" w-full flex justify-center mx-auto border-[1px] border-gray-200 rounded-md py-8">
          <SimpleToggle />
        </div>
      </FirstHeaderSection>
      {/* Short toggle */}
      <HeaderSection className={""} title={"Short toggle"}>
        <div className="w-full flex justify-center mx-auto border-[1px] border-gray-200 rounded-md py-8 ">
          <ShortToggle />
        </div>
      </HeaderSection>

      {/* Toggle with icon */}
      <HeaderSection title={"Toggle with icon"}>
        <div className="w-full flex justify-center mx-auto border-[1px] border-gray-200 rounded-md py-8">
          <ToggleWithIcon />
        </div>
      </HeaderSection>
      {/* With left label and description */}
      <HeaderSection title={"With left label and description"}>
        <div className="w-full flex justify-center mx-auto border-[1px] border-gray-200 rounded-md py-8">
          <WithLeftLabelAndDescription />
        </div>
      </HeaderSection>
      {/* With right label */}
      <HeaderSection title={"With right label"}>
        <div className="w-full flex justify-center mx-auto border-[1px] border-gray-200 rounded-md py-8">
          <WithRightLabel />
        </div>
      </HeaderSection>
    </div>
  );
};

export default Togols;

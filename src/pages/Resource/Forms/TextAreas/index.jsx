import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import Simple from "./Simple";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import WithAvatarAndActions from "./With avatar and actions";
import WithUnderlineAndActions from "./With underline and actions";
import WithTitleAndPillActions from "./With title and pill actions";
import WithPreviewButton from "./With preview button";

const TextAreas = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Froms'} title={"Textareas"} />
      <FirstHeaderSection title={"Simple"}>
        <div className=" lg:px-72 ">
          <Simple />
        </div>
      </FirstHeaderSection>
      {/* With avatar and actions */}
      <HeaderSection title={"With Avatar and Action"}>
        <div className=" lg:px-72 ">
          <WithAvatarAndActions />
        </div>
      </HeaderSection>
      {/* With underline and actions */}
      <HeaderSection title={"With underline and actions"}>
        <div className=" lg:px-72 ">
          <WithUnderlineAndActions />
        </div>
      </HeaderSection>
      {/* With title and pill actions */}
      <HeaderSection title={"With title and pill actions"}>
        <div className=" lg:px-72 ">
          <WithTitleAndPillActions />
        </div>
      </HeaderSection>
      {/* With preview button */}
      <HeaderSection title={"With preview button"}>
        <div className="lg:px-72 ">
          <WithPreviewButton />
        </div>
      </HeaderSection>
    </div>
  );
};

export default TextAreas;

import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SimpleCardFooter from "./Simple card footer";
import CenteredPageNumbers from "./Centered page numbers";
import CardFooterWithPageButtons from "./Card footer with page buttons";

const Pagination = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"appui"}
        section={"Application UI"}
        tag={"Navigation"}
        title={'Pagination'}
      />
      <FirstHeaderSection title={"Card footer with page buttons"}>
        <div className="h-full pt-20 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
          <SimpleCardFooter />
        </div>
      </FirstHeaderSection>
      <HeaderSection title={"Card Footer With Page Buttons"}>
        <div className="h-full pt-20 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
          <CardFooterWithPageButtons />
        </div>
      </HeaderSection>
      <HeaderSection title={"Centered Page Numbers"}>
        <div className="h-full pt-20 pb-4 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
          <CenteredPageNumbers />
        </div>
      </HeaderSection>
    </div>
  );
};

export default Pagination;

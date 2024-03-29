import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import Simple from "./Simple";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Split_with_image from "./Split with image";
import With_popular_pages from "./With popular pages";
import With_background_image from "./With background image";
import With_navbar_and_footer from "./With navbar and footer";

const FeedBack = () => {
  return (
    <div>
      <MainHeaderSection
        title={"FeedBack"}
        goto={'marketing'} 
        section={"Marketing"}
        tag={"FeedBack"}
        
      />
      <FirstHeaderSection title={"Simple"}>
        <div className=" border-[1px] border-gray-200 rounded-lg">
          <Simple />
        </div>
      </FirstHeaderSection>
      {/* Split with image */}
      <HeaderSection title={'Split with image'}>
      <div className=" border-[1px] border-gray-200 rounded-lg">
          <Split_with_image />
        </div>
      </HeaderSection>
      {/* With popular pages */}
      <HeaderSection title={'With popular pages'}>
      <div className=" border-[1px] border-gray-200 rounded-lg">
          <With_popular_pages />
        </div>
      </HeaderSection>
      {/* With background image */}
      <HeaderSection title={'With background image'}>
      <div className=" border-[1px] border-gray-200 rounded-lg">
          <With_background_image />
        </div>
      </HeaderSection>
      {/* With navbar and footer */}
      <HeaderSection title={'With navbar and footer'}>
      <div className=" border-[1px] border-gray-200 rounded-lg">
          <With_navbar_and_footer />
        </div>
      </HeaderSection>
    </div>
  );
};

export default FeedBack;

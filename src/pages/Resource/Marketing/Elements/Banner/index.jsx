import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import With_button from "./With button";
import On_dark from "./On dark";
import On_brand from "./On brand";
import With_background_glow from "./With background glow";
import With_link from "./With link";
import Left_aligned from "./Left-aligned";
import Bottom_aligned from "./Bottom aligned";
import Floating_at_bottom from "./Floating at bottom";
import Floating_at_bottom_centered from "./Floating at bottom centered";
import Privacy_notice_right_aligned from "./Privacy notice right-aligned";
import Privacy_notice_centered from "./Privacy notice centered";
import Privacy_notice_left_aligned from "./Privacy notice left-aligned";
import Privacy_notice_full_width from "./Privacy notice full width";

const Banners = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={"Banners"} tag={"Elelments"} />
      <FirstHeaderSection title={"With Button"}>
        <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <With_button />
        </div>
      </FirstHeaderSection>
      {/* On dark */}
      <HeaderSection title={"On dark"}>
      <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <On_dark />
        </div>
      </HeaderSection>
      {/* On brand */}
      <HeaderSection title={"On brand"}>
      <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <On_brand />
        </div>
      </HeaderSection>
      {/* With background glow */}
      <HeaderSection title={"With background glow"}>
      <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <With_background_glow />
        </div>
      </HeaderSection>
      {/* With link */}
      <HeaderSection title={"With link"}>
      <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <With_link />
        </div>
      </HeaderSection>
      {/* Left-aligned */}
      <HeaderSection title={"Left-aligned"}>
      <div className=" mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Left_aligned />
        </div>
      </HeaderSection>
      {/*Bottom aligned */}
      <HeaderSection title={"Bottom aligned"}>
      <div className=" flex flex-col justify-end mx-1 h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Bottom_aligned />
        </div>
      </HeaderSection>
      {/* Floating at bottom */}
       <HeaderSection title={"Floating at bottom"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Floating_at_bottom />
        </div>
      </HeaderSection>
      {/* Floating at bottom centered */}
       <HeaderSection title={"Floating at bottom centered"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Floating_at_bottom_centered />
        </div>
      </HeaderSection>
      {/* Privacy notice right-aligned */}
       <HeaderSection title={"Privacy notice right-aligned"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Privacy_notice_right_aligned />
        </div>
      </HeaderSection>
      {/* Privacy notice centered */}
       <HeaderSection title={"Privacy notice centered"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Privacy_notice_centered />
        </div>
      </HeaderSection>
      {/* Privacy notice left-aligned */}
       <HeaderSection title={"Privacy notice left-aligned"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Privacy_notice_left_aligned />
        </div>
      </HeaderSection>
      {/* Privacy notice full width */}
       <HeaderSection title={"Privacy notice full width"}>
      <div className="flex flex-col justify-end h-[300px] border-t-0 border-[1px] border-gray-200 rounded-xl">
          <Privacy_notice_full_width />
        </div>
      </HeaderSection>




    </div>
  );
};

export default Banners;

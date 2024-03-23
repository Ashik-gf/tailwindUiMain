import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Basic from "./Basic";
import AlignedToCenter from "./AlignedToCenter";
import AlignedToBottom from "./AlignedToBottom";
import StretchedToFit from "./StretchedToFit";
import MediaOnRight from "./Media on right";
import BasicResponsive from "./BasicResponsive";
import WideResponsive from "./WideResponsive";
import Nested from "./Nested";

const MediaObject = () => {
  return (
    <div>
      <MainHeaderSection title={"Media Objects"} tag={"Layout"} />
      <HeaderSection title={"Basic"}>
        <div className=" md:mx-[250px] my-12 ">
          <Basic />
        </div>
      </HeaderSection>
      {/* Aligned to center */}
      <HeaderSection title={"Aligned to center"}>
        <div className=" md:mx-[250px] my-12 ">
          <AlignedToCenter />
        </div>
      </HeaderSection>
      {/*Aligned to bottom */}
      <HeaderSection title={"Aligned to bottom"}>
        <div className=" md:mx-[250px] my-12 ">
          <AlignedToBottom />
        </div>
      </HeaderSection>
      {/*Stretched to fit */}
      <HeaderSection title={"Stretched to fit"}>
        <div className=" md:mx-[250px] my-12 ">
          <StretchedToFit />
        </div>
      </HeaderSection>
      {/*Media on right */}
      <HeaderSection title={"Media on right"}>
        <div className=" md:mx-[250px] my-12 ">
          <MediaOnRight />
        </div>
      </HeaderSection>
      {/*Basic responsive */}
      <HeaderSection title={"Basic responsive"}>
        <div className=" md:mx-[250px] my-12 ">
          <BasicResponsive />
        </div>
      </HeaderSection>
      {/*Wide responsive */}
      <HeaderSection title={"Wide responsive"}>
        <div className=" md:mx-[250px] my-12 ">
          <WideResponsive />
        </div>
      </HeaderSection>
      {/*Nested */}
      <HeaderSection title={"Nested"}>
        <div className=" md:mx-[250px] my-12 ">
          <Nested />
        </div>
      </HeaderSection>

    </div>
  );
};

export default MediaObject;

import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import BasicCard from "./Basic card";
import CardEdgeToEdgeOnMobile from "./Card, edge-to-edge on mobile";
import CardWithHeader from "./Card with header";
import CardWithFooter from "./Card with footer";
import CardWithHeaderAndFooter from "./Card with header and footer";
import CardWithGrayFooter from "./Card with gray footer";
import CardWithGrayBody from "./Card with gray body";
import Well from "./Well";
import WellOnGray from "./Well on gray";
import WellEdgeToEdgeOnMobile from "./Well, edge-to-edge on mobile";

const Panels = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} title={"Panels"} tag={"Layoyt"} />
      <FirstHeaderSection className={""} title={"Basic card"}>
        <div className="mx-2">
          <BasicCard />
        </div>
      </FirstHeaderSection>
      {/*  Card, edge-to-edge on mobile*/}
      <HeaderSection className={""} title={"Card, edge-to-edge on mobile"}>
        <div className="mx-2">
          <CardEdgeToEdgeOnMobile />
        </div>
      </HeaderSection>
      {/*  Card with header*/}
      <HeaderSection className={""} title={"Card with header"}>
        <div className="mx-2 py-12">
          <CardWithHeader />
        </div>
      </HeaderSection>
      {/*  Card with footer*/}
      <HeaderSection className={""} title={"Card with footer"}>
        <div className="mx-12 py-12">
          <CardWithFooter />
        </div>
      </HeaderSection>
      {/*  Card with header and footer*/}
      <HeaderSection className={" bg-[#F3F4F6]"} title={"Card with header and footer"}>
        <div className="mx-12 py-12">
          <CardWithHeaderAndFooter />
        </div>
      </HeaderSection>
      {/*  Card with gray footer*/}
      <HeaderSection className={""} title={"Card with gray footer"}>
        <div className="mx-12 py-12">
          <CardWithGrayFooter />
        </div>
      </HeaderSection>
      {/*  Card with gray body*/}
      <HeaderSection className={""} title={"Card with gray body"}>
        <div className="px-12 py-12 bg-[#F3F4F6]">
          <CardWithGrayBody />
        </div>
      </HeaderSection>
      {/*  Well*/}
      <HeaderSection className={""} title={"Well"}>
        <div className="mx-24 py-12">
          <Well />
        </div>
      </HeaderSection>
      {/*  Well on gray*/}
      <HeaderSection className={""} title={"Well on gray"}>
        <div className="mx-2 py-12">
          <WellOnGray />
        </div>
      </HeaderSection>
      {/*  Well, edge-to-edge on mobile*/}
      <HeaderSection className={""} title={"Well, edge-to-edge on mobile"}>
        <div className="mx-12 py-12">
          <WellEdgeToEdgeOnMobile />
        </div>
      </HeaderSection>
    </div>
  );
};

export default Panels;

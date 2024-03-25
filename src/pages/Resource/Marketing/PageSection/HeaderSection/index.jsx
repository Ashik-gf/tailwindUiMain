import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import WithStats from "./With stats";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Centered from "./Centered";
import SimpleWithEyebrow from "./Centered with eyebrow";
import CenteredOnDark from "./Centered on dark";
import WithCards from "./With cards";
import Simple from "./Simple";
import SimpleOnDark from "./Simple on dark";
import SimpleWithBackgroundImage from "./Simple with background image";
import CenteredWithBackgroundImage from "./Centered with background image";

const HeaderSections = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={"Header Sections"} tag={"Page Section"} />
      <FirstHeaderSection title={"With stats"}>
        <div className="mx-2">
          <WithStats />
        </div>
      </FirstHeaderSection>
      <HeaderSection title={'Centerd'}>
        <Centered />
      </HeaderSection>
      {/* SimpleWithEyebrow */}
      <HeaderSection title={'Simple With Eyebrow'}>
        <SimpleWithEyebrow />
      </HeaderSection>
{/* Centered on dark  */}
      <HeaderSection title={'Centered on dark'}>
        <CenteredOnDark />
      </HeaderSection>
{/* Centered on dark  */}
      <HeaderSection title={'Centered on dark'}>
        <CenteredOnDark />
      </HeaderSection>
{/* With cards  */}
      <HeaderSection title={'With cards'}>
        <WithCards />
      </HeaderSection>
{/* Simple */}
      <HeaderSection title={'Simple'}>
        <Simple />
      </HeaderSection>
{/* Simple on dark */}
      <HeaderSection title={'Simple on dark'}>
        <SimpleOnDark />
      </HeaderSection>
{/* Simple with background image */}
      <HeaderSection title={'Simple with background image'}>
        <SimpleWithBackgroundImage />
      </HeaderSection>
{/* CenteredWithBackgroundImage */}
      <HeaderSection title={'Centered With Background Image'}>
        <CenteredWithBackgroundImage />
      </HeaderSection>
      
    </div>
  );
};

export default HeaderSections;

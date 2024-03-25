import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import DarkPanelWithAppScreenshot from "./Dark panel with app screenshot";
import SimpleStacked from "./Simple stacked";
import CenteredOnDarkPanel from "./Centered on dark panel";
import SimpleCentered from "./Simple centered";
import SimpleCenteredOnDark from "./Simple centered on dark";
import SimpleCenteredOnBrand from "./Simple centered on brand";
import SimpleJustified from "./Simple justified";
import SimpleJustifiedOnLightBrand from "./Simple justified on light brand";
import SplitWithImage from "./Split with image";
import TwoColumnsWithPhotoOnDark from "./Two columns with photo on dark";
import WithImageTiles from "./With image tiles";

const CTASection = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={"CTA Sections"} tag={"Page Section"} />
      <FirstHeaderSection title={"Dark panel with app screenshot"}>
        <div className="div">
          < DarkPanelWithAppScreenshot/>
        </div>
      </FirstHeaderSection>
      {/* Simple Stacked */}
      <HeaderSection title={'Simple Stacked'}>
        <div className="div">
        <SimpleStacked />
        </div>
      </HeaderSection>
      {/* Centered on dark panel */}
      <HeaderSection title={'Centered on dark panel'}>
        <div className="div">
        <CenteredOnDarkPanel />
        </div>
      </HeaderSection>
      {/* Simple centered */}
      <HeaderSection title={'Simple centered'}>
        <div className="div">
        <SimpleCentered />
        </div>
      </HeaderSection>
      {/* Simple centered on dark */}
      <HeaderSection title={'Simple centered on dark'}>
        <div className="div">
        <SimpleCenteredOnDark />
        </div>
      </HeaderSection>
      {/* Simple centered on brand */}
      <HeaderSection title={'Simple centered on brand'}>
        <div className="div">
        <SimpleCenteredOnBrand />
        </div>
      </HeaderSection>
      {/* Simple justified */}
      <HeaderSection title={'Simple justified'}>
        <div className="div">
        <SimpleJustified />
        </div>
      </HeaderSection>
      {/* Simple justified on light brand */}
      <HeaderSection title={'Simple justified on light brand'}>
        <div className="div">
        <SimpleJustifiedOnLightBrand />
        </div>
      </HeaderSection>
      {/* Split with image */}
      <HeaderSection title={'Split with image'}>
        <div className="div">
        <SplitWithImage />
        </div>
      </HeaderSection>
      {/* Two columns with photo on dark */}
      <HeaderSection title={'Two columns with photo on dark'}>
        <div className="div">
        <TwoColumnsWithPhotoOnDark />
        </div>
      </HeaderSection>
      {/* With image tiles */}
      <HeaderSection title={'With image tiles'}>
        <div className="div">
        <WithImageTiles />
        </div>
      </HeaderSection>
    </div>
  );
};

export default CTASection;

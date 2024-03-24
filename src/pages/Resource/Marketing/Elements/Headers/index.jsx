import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import WithStackedFlyoutMenu from "./With stacked flyout menu";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Constrained from "./Constrained";
import OnDarkBackground from "./On dark background";
import OnBrandBackground from "./On brand background";
import WithFullWidthFlyoutMenu from "./With full width flyout menu";
import FullWidth from "./Full width";
import With_call_to_action from "./With call-to-action";
import With_multiple_flyout_menus from "./With multiple flyout menus";
import With_icons_in_mobile_menu from "./With icons in mobile menu";
import With_left_aligned_nav from "./With left-aligned nav";
import With_right_aligned_nav from "./With right-aligned nav";
import With_centered_logo from "./With centered logo";

const HeadresElements = () => {
  return (
    <div>
      <MainHeaderSection title={"Headers"} tag={"Elements"} />
      <FirstHeaderSection title={"With stacked flyout menu"}>
        <div className="div">
          <WithStackedFlyoutMenu />
        </div>
      </FirstHeaderSection>
      {/* Constrained */}
      <HeaderSection title={"Constrained"}>
        <div className="div">
          <Constrained />
        </div>
      </HeaderSection>
      {/*On dark background */}
      <HeaderSection title={"On dark background"}>
        <div className="div">
          <OnDarkBackground />
        </div>
      </HeaderSection>
      {/*On brand background */}
      <HeaderSection title={"On brand background"}>
        <div className="div">
          <OnBrandBackground />
        </div>
      </HeaderSection>
      {/*With full width flyout menu */}
      <HeaderSection title={"With full width flyout menu"}>
        <div className="div">
          <WithFullWidthFlyoutMenu />
        </div>
      </HeaderSection>
      {/*Full width */}
      <HeaderSection title={"Full width"}>
        <div className="div">
          <FullWidth />
        </div>
      </HeaderSection>
      {/*With call-to-action */}
      <HeaderSection title={"With call-to-action"}>
        <div className="div">
          <With_call_to_action />
        </div>
      </HeaderSection>
    
      {/* With multiple flyout menus */}
      <HeaderSection title={"With multiple flyout menus"}>
        <div className="div">
          <With_multiple_flyout_menus />
        </div>
      </HeaderSection>
      {/* With icons in mobile menu */}
      <HeaderSection title={"With icons in mobile menu"}>
        <div className="div">
          <With_icons_in_mobile_menu />
        </div>
      </HeaderSection>
      {/* With left-aligned nav */}
      <HeaderSection title={"With left-aligned nav"}>
        <div className="div">
          <With_left_aligned_nav />
        </div>
      </HeaderSection>
      {/* With left-aligned nav */}
      <HeaderSection title={"With left-aligned nav"}>
        <div className="div">
          <With_right_aligned_nav />
        </div>
      </HeaderSection>
      {/* With centered logo */}
      <HeaderSection title={"With centered logo"}>
        <div className="div">
          <With_centered_logo />
        </div>
      </HeaderSection>


    </div>
  );
};

export default HeadresElements;

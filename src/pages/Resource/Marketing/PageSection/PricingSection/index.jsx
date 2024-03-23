import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import SinglePriceWithDetails from "./Single price with details";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import ThreeTiers from "./Three tiers";
import ThreeTiersWithDividers from "./Three tiers with dividers";
import ThreeTiersWithEmphasizedTier from "./Three tiers with emphasized tier";
import ThreeTiersWithToggle from "./Three tiers with toggle";
import ThreeTiersWithToggleOnDark from "./Three tiers with toggle on dark";
import FourTiersWithToggle from "./Four tiers with toggle";
import TwoTiersWithExtraTier from "./Two tiers with extra tier";
import WithComparisonTable from "./With comparison table";
import WithComparisonTableonDark from "./With comparison table on dark";
import TwoTiers from "./Two tiers";
import TwoTiersWithEmphasizedTier from "./Two tiers with emphasized tier";

const PricingSection = () => {
  return (
    <div>
      <MainHeaderSection title={"Pricing Sections"} tag={"Page Section"} />
      <FirstHeaderSection title={"Single price with details"}>
        <SinglePriceWithDetails />
      </FirstHeaderSection>
      {/* Three tiers */}
      <HeaderSection title={"Three tiers"}>
        <div className="div">
          <ThreeTiers />
        </div>
      </HeaderSection>
      {/* Three tiers with dividers */}
      <HeaderSection title={"Three tiers with dividers"}>
        <div className="div">
          <ThreeTiersWithDividers />
        </div>
      </HeaderSection>
      {/* Three tiers with emphasized tier */}
      <HeaderSection title={"Three tiers with emphasized tier"}>
        <div className="div">
          <ThreeTiersWithEmphasizedTier />
        </div>
      </HeaderSection>
      {/* Three tiers with toggle */}
      <HeaderSection title={"Three tiers with toggle"}>
        <div className="div">
          <ThreeTiersWithToggle />
        </div>
      </HeaderSection>
      {/* Three tiers with toggle on dark */}
      <HeaderSection title={"Three tiers with toggle on dark"}>
        <div className="div">
          <ThreeTiersWithToggleOnDark />
        </div>
      </HeaderSection>
      {/* Four tiers with toggle */}
      <HeaderSection title={"Four tiers with toggle"}>
        <div className="div">
          <FourTiersWithToggle />
        </div>
      </HeaderSection>
      {/* Two tiers with extra tier */}
      <HeaderSection title={"Two tiers with extra tier"}>
        <div className="div">
          <TwoTiersWithExtraTier />
        </div>
      </HeaderSection>
      {/* With comparison table */}
      <HeaderSection title={"With comparison table"}>
        <div className="div">
          <WithComparisonTable />
        </div>
      </HeaderSection>
      {/* With comparison table on dark */}
      <HeaderSection title={"With comparison table on dark"}>
        <div className="div">
          <WithComparisonTableonDark />
        </div>
      </HeaderSection>
      {/* Three tiers with feature comparison */}
      <HeaderSection title={"Three tiers with feature comparison"}>
        <div className="div">
          <WithComparisonTableonDark />
        </div>
      </HeaderSection>
      {/* Two tiers */}
      <HeaderSection title={"Two tiers"}>
        <div className="div">
          <TwoTiers />
        </div>
      </HeaderSection>
      {/* Two tiers with emphasized tier */}
      <HeaderSection title={"Two tiers with emphasized tier"}>
        <div className="div">
          <TwoTiersWithEmphasizedTier />
        </div>
      </HeaderSection>
    </div>
  );
};

export default PricingSection;

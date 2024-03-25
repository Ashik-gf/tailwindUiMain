import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import With_four_tiers from "./With four tiers";
import With_comparison_table from "./With comparison table";
import With_three_tiers_and_testimonials from "./With three tiers and testimonial";
import With_three_tiers_and_eature_comparison from "./With three tiers and feature comparison";
import With_split_brand_panel from "./With split brand panel";
import With_four_tiers_and_feature_list from "./With four tiers and feature list";
import With_feature_list from "./With feature list";

const PricingPages = () => {
  return (
    <div>
      <MainHeaderSection
        title={"Pricing Page"}
        section={"Marketing"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With four tiers"}>
        <div className="border-2 border-gray-200 rounded-lg">
<With_four_tiers />
        </div>
      </FirstHeaderSection>
      {/* With comparison table */}
      <HeaderSection title={"With comparison table"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_comparison_table />
        </div>
      </HeaderSection>
      {/* With three tiers and testimonials */}
      <HeaderSection title={"With three tiers and testimonials"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_three_tiers_and_testimonials />
        </div>
      </HeaderSection>
      {/* With three tiers and testimonials */}
      <HeaderSection title={"With three tiers and testimonials"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_three_tiers_and_testimonials />
        </div>
      </HeaderSection>
      {/* With three tiers and eature comparison */}
      <HeaderSection title={"With three tiers and eature comparison"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_three_tiers_and_eature_comparison />
        </div>
      </HeaderSection>
      {/* With_split_brand_panel */}
      <HeaderSection title={"With split brand panel"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_split_brand_panel />
        </div>
      </HeaderSection >
      {/* With_four_tiers_and_feature_list */}
      <HeaderSection title={"With four tiers and feature list"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_four_tiers_and_feature_list />
        </div>
      </HeaderSection>

      {/* With_feature_list */}
      <HeaderSection title={"With feature list"}>
        <div className="border-2 border-gray-200 rounded-lg">
    <With_feature_list />
        </div>
      </HeaderSection>



    </div>
  );
};

export default PricingPages;

import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import With_inline_actions_and_expandable_sidebar_filters from "./With inline actions and expandable sidebar filters";
import With_centered_text_and_dropdown_product_filters from "./With centered text and dropdown product";
import With_dropdown_product_filters from "./With dropdown product filters";
import With_expandable_product_filter_panel from "./With expandable product filter panel";
import Sidebar_filters from "./Sidebar filters";

const CategoryFilters = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Category Filter"}
        tag={"Components"}
      />
      <FirstHeaderSection
        title={"With inline actions and expandable sidebar filters"}
      >
        <div className="border-2 border-gray-200 rounded-xl">
          <With_inline_actions_and_expandable_sidebar_filters />
        </div>
      </FirstHeaderSection>
      {/* With centered text and dropdown product filters */}
      <HeaderSection title={"With centered text and dropdown product filters"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_centered_text_and_dropdown_product_filters />
        </div>
      </HeaderSection>
      {/* With dropdown product filters */}
      <HeaderSection title={"With dropdown product filters"}>
        <div className="border-2 border-gray-200 h-[400px] rounded-xl">
          <With_dropdown_product_filters />
        </div>
      </HeaderSection>
      {/* With expandable product filter panel */}
      <HeaderSection title={"With expandable product filter panel"}>
        <div className="border-2 border-gray-200 h-[400px] rounded-xl">
          <With_expandable_product_filter_panel />
        </div>
      </HeaderSection>
      {/* Sidebar filters */}
      <HeaderSection title={"Sidebar filters"}>
        <div className="border-2 border-gray-200 h-[100%] rounded-xl">
          <Sidebar_filters />
        </div>
      </HeaderSection>
    </div>
  );
};

export default CategoryFilters;

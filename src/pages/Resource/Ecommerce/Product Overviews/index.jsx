import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import With_image_grid from "./With image grid";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import With_tiered_images from "./With tiered images";
import With_image_gallery_and_expandable_details from "./With image gallery and expandable details";
import With_tabs from "./With tabs";

const ProductsOverViews = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Products Over Views"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"With image grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_image_grid />
        </div>
      </FirstHeaderSection>
      {/* With tiered images */}
      <HeaderSection title={'With tiered images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_tiered_images />
        </div>
      </HeaderSection>
      {/* With tiered images */}
      <HeaderSection title={'With tiered images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_tiered_images />
        </div>
      </HeaderSection>
      {/* With image gallery and expandable details */}
      <HeaderSection title={'With image gallery and expandable details'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_image_gallery_and_expandable_details />
        </div>
      </HeaderSection>
      {/* With tabs */}
      <HeaderSection title={'With tabs'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_tabs />
        </div>
      </HeaderSection>

    </div>
  );
};

export default ProductsOverViews;

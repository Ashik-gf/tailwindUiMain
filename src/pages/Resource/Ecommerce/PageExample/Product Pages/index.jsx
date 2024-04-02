import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_related_products from './With related products'
import With_image_grid from './With image grid'
import With_expandable_product_details from './With expandable product details'
import With_featured_details from './With featured details'
import With_tabs_and_related_products from './With tabs and related products'

const ProductPages = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Product Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With related products"}>
        <div className="border-2 border-gray-200 rounded-xl">
    <With_related_products />
        </div>
      </FirstHeaderSection>
      {/* InvoiceTable */}
      <HeaderSection title={"With image grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_image_grid />
        </div>
        {/* With expandable product details */}
      </HeaderSection>
      <HeaderSection title={"With expandable product details"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_expandable_product_details />
        </div>
      </HeaderSection>
      {/* With featured details */}
      <HeaderSection title={"With featured details"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_featured_details />
        </div>
      </HeaderSection>
      {/* With tabs and related products */}
      <HeaderSection title={"With tabs and related products"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_tabs_and_related_products />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ProductPages
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_related_products from './With related products'
import Simple_with_policy_grid from './Simple with policy grid'
import With_policy_grid_and_extended_summary from './With policy grid and extended summary'

const ShopingCartPages = () => {
  return (
    <div>
         <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Shopping Cart Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With related products"}>
        <div className="border-2 border-gray-200 rounded-xl">
    <With_related_products />
        </div>
      </FirstHeaderSection>
      {/* Simple with policy grid */}
      <HeaderSection title={"Simple with policy grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Simple_with_policy_grid />
        </div>
      </HeaderSection>
      {/* With policy grid and extended summary */}
      <HeaderSection title={"With policy grid and extended summary"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_policy_grid_and_extended_summary />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ShopingCartPages
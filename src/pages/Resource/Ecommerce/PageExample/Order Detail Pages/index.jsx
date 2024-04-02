import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_progress_bars from './With progress bars'
import With_large_images_and_progress_bars from './With large images and progress bars'
import Simple_with_full_order_details from './Simple with full order details'

const OrderDetailPages = () => {
  return (
    <div>
        <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Order Detail Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With progress bars"}>
        <div className="border-2 border-gray-200 rounded-xl">
    <With_progress_bars />
        </div>
      </FirstHeaderSection>
      {/* With large images and progress bars */}
      <HeaderSection title={"With large images and progress bars"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_large_images_and_progress_bars/>
        </div>
      </HeaderSection>
      {/* Simple with full order details */}
      <HeaderSection title={"Simple with full order details"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Simple_with_full_order_details/>
        </div>
      </HeaderSection>
    </div>
  )
}

export default OrderDetailPages
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_color_and_size_selector from './With color and size selector'
import With_color_selector_size_selector_and_details_link from './With color selector, size selector, and detail'
import With_color_selector_and_description from './With color selector and description'

const Product_Quickviews = () => {
  return (
    <div>
      <MainHeaderSection
    goto={"ecommerce"}
    section={"Ecommerce"}
    title={"Product Quickviews"}
    tag={"Components"}
  />
  <FirstHeaderSection title={"With color and size selector"}>
    <div className="border-2 border-gray-200 rounded-xl h-[650px]">
   <With_color_and_size_selector  />
    </div>
  </FirstHeaderSection>
  {/* With tiered images */}
  <HeaderSection title={'With color selector, size selector, and details link'}>
  <div className="border-2 border-gray-200 rounded-xl md:h-[650px] h-full">
     <With_color_selector_size_selector_and_details_link />
    </div>
  </HeaderSection>
  {/* With tiered images */}
  <HeaderSection title={'With color selector, size selector, and details link'}>
  <div className="border-2 border-gray-200 rounded-xl">
     <With_color_selector_and_description />
    </div>
  </HeaderSection>


  </div>
  )
}

export default Product_Quickviews
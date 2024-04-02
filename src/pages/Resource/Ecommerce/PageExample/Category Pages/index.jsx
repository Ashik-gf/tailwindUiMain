import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_text_header_and_image_product_grid from './With text header and image product grid'
import With_image_header_and_detail_product_grid from './With image header and detail product grid'
import With_text_header_and_simple_product_grid from './With text header and simple product grid'
import With_large_images_and_filters_sidebar from './With large images and filters sidebar'

const CategoryPages = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Category Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With text header and image product grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
   <With_text_header_and_image_product_grid />
        </div>
      </FirstHeaderSection>
      {/* InvoiceTable */}
      <HeaderSection title={"With image header and detail product grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_image_header_and_detail_product_grid />
        </div>
      </HeaderSection>
      {/* With text header and simple product grid */}
      <HeaderSection title={"With text header and simple product grid"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_text_header_and_simple_product_grid />
        </div>
      </HeaderSection>
      {/* With large images and filters sidebar */}
      <HeaderSection title={"With large images and filters sidebar"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_large_images_and_filters_sidebar />
        </div>
      </HeaderSection>
    </div>
  )
}

export default CategoryPages
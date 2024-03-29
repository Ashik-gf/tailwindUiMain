import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_inline_price from './With inline price'
import Simple from './Simple'
import With_CTA_link from './With CTA link'
import With_color_swatches_and_horizontal_scrolling from './With color swatches and horizontal scrolling Preview'
import With_tall_images from './With tall images'
import With_image_overlay_and_add_button from './With image overlay and add button'
import With_supporting_text from './With supporting text'
import With_inline_price_and_CTA_link from './With inline price and CTA link'
import Card_with_full_details from './Card with full details'
import With_tall_mages_and_CTA_link from './With tall images and CTA link'
import With_border_grid from './With border grid'


const ProductsList = () => {
  return (
    <div>
       <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Products List"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"With inline price"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <With_inline_price />
        </div>
      </FirstHeaderSection>
      {/* Simple */}
      <HeaderSection title={'Simple'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Simple />
        </div>
      </HeaderSection>
      {/* With CTA link */}
      <HeaderSection title={'With CTA link'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_CTA_link />
        </div>
      </HeaderSection>
      {/* With color swatches and horizontal scrolling */}
      <HeaderSection title={'With color swatches and horizontal scrolling'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_color_swatches_and_horizontal_scrolling />
        </div>
      </HeaderSection>
      {/* With tall images */}
      <HeaderSection title={'With tall images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_tall_images />
        </div>
      </HeaderSection>
      {/* With image overlay and add button */}
      <HeaderSection title={'With image overlay and add button'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_image_overlay_and_add_button />
        </div>
      </HeaderSection>
      {/* With tall images and CTA link */}
      <HeaderSection title={'With tall images and CTA link'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_tall_mages_and_CTA_link />
        </div>
      </HeaderSection>
      {/* With_border_grid */}
      <HeaderSection title={'With border grid'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_border_grid />
        </div>
      </HeaderSection>




      {/* With supporting text */}
      <HeaderSection title={'With supporting text'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_supporting_text />
        </div>
      </HeaderSection>
      {/* With inline price and CTA link */}
      <HeaderSection title={'With inline price and CTA link'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_inline_price_and_CTA_link />
        </div>
      </HeaderSection>
      {/* Card_with_full_details */}
      <HeaderSection title={'Card with full details'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Card_with_full_details />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ProductsList
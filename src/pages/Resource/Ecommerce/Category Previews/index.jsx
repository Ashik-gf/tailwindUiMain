import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Three_column from './Three-column'

import With_background_image_and_detail_overlay from './With background image and detail overlay'
import With_image_backgrounds from './With image backgrounds'
import Three_column_with_description from './Three-column with description'
import With_scrolling_cards from './With scrolling cards'
import With_split_images from './With split images'

const Category_Previews = () => {
  return (
    <div>
         <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Products Over Views"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"Three Column"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <Three_column />
        </div>
      </FirstHeaderSection>
      {/* With image backgrounds */}
      <HeaderSection title={'With image backgrounds'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_image_backgrounds />
        </div>
      </HeaderSection>
      {/* With background image and detail overlay */}
      <HeaderSection title={'With background image and detail overlay'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_background_image_and_detail_overlay />
        </div>
      </HeaderSection>
      {/* Three-column with description */}
      <HeaderSection title={'Three-column with description'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Three_column_with_description />
        </div>
      </HeaderSection>
      {/*  With_scrolling_cards */}
      <HeaderSection title={'With scrolling cards'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_scrolling_cards />
        </div>
      </HeaderSection>
      {/*  With split images */}
      <HeaderSection title={'With split images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_split_images />
        </div>
      </HeaderSection>

    </div>
  )
}

export default Category_Previews
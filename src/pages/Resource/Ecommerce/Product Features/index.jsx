import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import WithWideImages from './WithWideImages'
import WithTieredImages from './WithTieredImages'
import WithTabs from './WithTabs'
import WithSquareImages from './WithSquareImages'
import WithSplitImage from './WithSplitImage'
import WithImageGrid from './WithImageGrid'
import WithHeaderImagesAndDescriptions from './WithHeaderImagesAndDescriptions'
import WithFadingImage from './WithFadingImage'
import WithAlternatingSections from './WithAlternatingSections'

const Product_Features = () => {
  return (
    <div>
       <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Products Features"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"With Wide Images"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <WithWideImages />
        </div>
      </FirstHeaderSection>
      {/* With image backgrounds */}
      <HeaderSection title={'With Tiered Images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithTieredImages />
        </div>
      </HeaderSection>
      {/* WithSplitImage */}
      <HeaderSection title={'With Split Image'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithSplitImage />
        </div>
      </HeaderSection>
      {/* WithTabs */}
      <HeaderSection title={'With Tabs'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithTabs />
        </div>
      </HeaderSection>
      {/* With Square Images */}
      <HeaderSection title={'With Square Images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithSquareImages />
        </div>
      </HeaderSection>
      {/* With Image Grid */}
      <HeaderSection title={'With Image Grid'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithImageGrid />
        </div>
      </HeaderSection>
      {/* WithHeaderImagesAndDescriptions */}
      <HeaderSection title={'With Header Images And Descriptions'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithHeaderImagesAndDescriptions />
        </div>
      </HeaderSection>
      {/* WithFadingImage */}
      <HeaderSection title={'With Fading Images'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithFadingImage />
        </div>
      </HeaderSection>
      {/* WithAlternatingSections */}
      <HeaderSection title={'With Alternating Sections'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <WithAlternatingSections />
        </div>
      </HeaderSection>
    </div>
  )
}

export default Product_Features
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import WithImageTiles from './WithImageTiles'
import WithFadingBackgroundImageAndTestimonials from './WithFadingBackgroundImageAndTestimonials'
import FullwidthWithBackgroundImage from './FullwidthWithBackgroundImage'
import FullWidthWithOverlappingImageTiles from './FullWidthWithOverlappingImageTiles'
import With_background_image from './With background image'
import WithOffersAndSplitImage from './WithOffersAndSplitImage'
import FullWidthWithBackgroundImageAndLargeContent from './FullWidthWithBackgroundImageAndLargeContent'

const PromoSections = () => {
  return (
    <div>
      <MainHeaderSection
    goto={"ecommerce"}
    section={"Ecommerce"}
    title={"Promo Sections"}
    tag={"Components"}
  />
  <FirstHeaderSection title={"With image tiles"}>
    <div className="border-2 border-gray-200 rounded-xl h-full ">
 <WithImageTiles />
    </div>
  </FirstHeaderSection>
  {/* With tiered images */}
  <HeaderSection title={'With color selector, size selector, and details link'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<WithFadingBackgroundImageAndTestimonials />
    </div>
  </HeaderSection>
  {/* Full width With Background Image */}
  <HeaderSection title={'Full width With Background Image'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<FullwidthWithBackgroundImage />
    </div>
  </HeaderSection>
  {/* Full-width with overlapping image tiles */}
  <HeaderSection title={'Full-width with overlapping image tiles'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<FullWidthWithOverlappingImageTiles />
    </div>
  </HeaderSection>
  {/* With background image */}
  <HeaderSection title={'With background image'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<With_background_image />
    </div>
  </HeaderSection>
  {/*WithOffersAndSplitImage */}
  <HeaderSection title={'WithOffers And Split Image'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<WithOffersAndSplitImage />
    </div>
  </HeaderSection>
  {/*WithOffersAndSplitImage */}
  <HeaderSection title={'WithOffers And Split Image'}>
  <div className="border-2 border-gray-200 rounded-xl  h-full">
<FullWidthWithBackgroundImageAndLargeContent />
    </div>
  </HeaderSection>
    </div>
  )
}

export default PromoSections
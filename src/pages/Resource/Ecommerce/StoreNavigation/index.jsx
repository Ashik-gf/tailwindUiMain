import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import WithFeaturedCategories from './WithFeaturedCategories'
import WithImageGrid from './WithImageGrid'
import WithSimpleMenuAndPromo from './WithSimpleMenuAndPromo'
import WithCenteredLogoAndFeaturedCategories from './WithCenteredLogoAndFeaturedCategories'
import WithDoubleColumnAndPersistentMobileNavPreview from './WithDoubleColumnAndPersistentMobileNavPreview'

const StoreNavigation = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Products Features"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"With Wide Images"}>
        <div className="border-2 border-gray-200 h-[600px] rounded-xl">
      <WithFeaturedCategories />
        </div>
      </FirstHeaderSection>
      {/* With image backgrounds */}
      <HeaderSection title={'With Image Grid'}>
      <div className="border-2 border-gray-200 h-[600px] rounded-xl">
        <WithImageGrid />
        </div>
      </HeaderSection>
      {/* WithSimpleMenuAndPromo */}
      <HeaderSection title={'With Simple Menu And Promo '}>
      <div className="border-2 border-gray-200 rounded-xl h-[600px]">
        <WithSimpleMenuAndPromo />
        </div>
      </HeaderSection>
      {/* With Centered Logo And Featured Categories */}
      <HeaderSection title={'With Centered LogoAnd Featured Categories '}>
      <div className="border-2 border-gray-200 rounded-xl h-full sm:h-[1200px]">
        <WithCenteredLogoAndFeaturedCategories />
        </div>
      </HeaderSection>
      {/* With WithDoubleColumnAndPersistentMobileNavPreview */}
      <HeaderSection title={'With Double Column And Persistent Mobile Nav Preview '}>
      <div className="border-2 border-gray-200 rounded-xl h-[600px]">
        <WithDoubleColumnAndPersistentMobileNavPreview />
        </div>
      </HeaderSection>
    </div>
  )
}

export default StoreNavigation
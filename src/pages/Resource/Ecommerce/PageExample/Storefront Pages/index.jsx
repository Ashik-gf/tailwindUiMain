import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_dark_nav_and_footer from './With dark nav and footer'
import ExamWith_offers_and_testimonialsple from './With offers and testimonials'
import With_image_tiles_and_feature_sections from './With image tiles and feature sections'
import With_overlapping_image_tiles_and_perks from './With overlapping image tiles and perks'

const StorefrontPages = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Storefront Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={" With dark nav and footer "}>
        <div className="border-2 border-gray-200 rounded-xl">
     <With_dark_nav_and_footer />
        </div>
      </FirstHeaderSection>
      {/* InvoiceTable */}
      <HeaderSection title={"With offers and testimonials"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <ExamWith_offers_and_testimonialsple />
        </div>
      </HeaderSection>
      {/* With image tiles and feature sections */}
      <HeaderSection title={"With image tiles and feature sections"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_image_tiles_and_feature_sections />
        </div>
      </HeaderSection>
      {/* With overlapping image tiles and perks */}
      <HeaderSection title={"With overlapping image tiles and perks"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_overlapping_image_tiles_and_perks />
        </div>
      </HeaderSection>
    </div>
  )
}

export default StorefrontPages
import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import WithStickyProductScreenshot from './With sticky product screenshot'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithTestimonial from './With testimonial'
import TwoColumnsWithScreenshot from './Two columns with screenshot'
import WithTestimonialAndStats from './With testimonial and stats'
import SplitWithImage from './Split with image'
import Centered from './Centered'

const ContentSections = () => {
  return (
    <div>
      <MainHeaderSection title={'Content Sections'} tag={'Page Section'} />
      <FirstHeaderSection title={'With sticky product screenshot'}>
    <div className="border-2 border-gray-200 rounded-lg">
      <WithStickyProductScreenshot />
    </div>
      </FirstHeaderSection>
      {/*  */}
      <HeaderSection title={'With testimonial'}>
      <div className="border-2 border-gray-200 rounded-lg">
      <WithTestimonial />
    </div>
      </HeaderSection>
      {/*With Testimonial And Stats  */}
      <HeaderSection title={'With Testimonial and Stats'}>
      <div className="border-2 border-gray-200 rounded-lg">
      <WithTestimonialAndStats />
    </div>
      </HeaderSection>
      {/*Split with image */}
      <HeaderSection title={'Split with image'}>
      <div className="border-2 border-gray-200 rounded-lg">
      <SplitWithImage />
    </div>
      </HeaderSection>
      {/*Centered */}
      <HeaderSection title={'Centered'}>
      <div className="border-[1px] border-gray-200 rounded-lg">
      <Centered />
    </div>
      </HeaderSection>



    </div>
  )
}

export default ContentSections
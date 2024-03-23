import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import Centered from './Centered'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import Side_bySideGrid from './Side-by-side grid'
import SplitWithPattern from './Split with pattern'
import SplitWithPatternOnDark from './Split with pattern on dark'
import SimpleFourColumn from './Simple four-column'
import SimpleCentered from './Simple centered'
import WithTestimonial from './With testimonial'
import SplitWithImage from './Split with image'

const ContactSection = () => {
  return (
    <div>
      <MainHeaderSection title={'Contact Sections'} tag={'Page Section'} />
      <FirstHeaderSection title={'Centered'}>
        <div className="div border-[2px] border-gray-200 rounded-lg">
          <Centered />
        </div>
      </FirstHeaderSection>
      {/* Side-by-side grid */}
      <HeaderSection title={'Side-by-side grid'}>
      <div className="div">
        <Side_bySideGrid  ></Side_bySideGrid>
      </div>
      </HeaderSection>
      {/* {Split with pattern */}
      <HeaderSection title={'Split with pattern'}>
      <div className="div">
       <SplitWithPattern/>
      </div>
      </HeaderSection>
      {/* {Split with pattern on dark */}
      <HeaderSection title={'Split with pattern on dark'}>
      <div className="div">
       <SplitWithPatternOnDark/>
      </div>
      </HeaderSection>
      {/* {Simple four-column */}
      <HeaderSection title={'Simple four-column'}>
      <div className="div">
       <SimpleFourColumn/>
      </div>
      </HeaderSection>
      {/* {Simple centered */}
      <HeaderSection title={'Simple centered'}>
      <div className="div">
       <SimpleCentered/>
      </div>
      </HeaderSection>
      {/* {With testimonial */}
      <HeaderSection title={'With testimonial'}>
      <div className="div">
       <WithTestimonial/>
      </div>
      </HeaderSection>
      {/* {Split with image */}
      <HeaderSection title={'Split with image'}>
      <div className="div">
       <SplitWithImage/>
      </div>
      </HeaderSection>
    </div>
  )
}

export default ContactSection
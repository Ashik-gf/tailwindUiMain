import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import SimpleCentered from './Simple centered'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithLargeAvatar from './With large avatar'
import WithOverlappingImage from './With overlapping image'
import WithBackgroundImage from './With background image'
import Side_by_Side from './Side-by-side'
import Side_by_sideOnDark from './Side-by-side on dark'
import WithStarRating from './With star rating'
import Grid from './Grid'
import Off_whiteGrid from './Off-white grid'

const Testimonials = () => {
  return (
    <div>
      <MainHeaderSection title={'Testimonials'} tag={'Page Section'} />
      <FirstHeaderSection title={'Simple centered'}>
      <SimpleCentered />
      </FirstHeaderSection>
      <HeaderSection title={'With large avatar'} >
      <div className="mx-1">
        <WithLargeAvatar />
      </div>
      </HeaderSection>
      {/* With overlapping image */}
      <HeaderSection title={'With overlapping image'} >
      <div className="mx-1">
        <WithOverlappingImage />
      </div>
      </HeaderSection>
      {/* With background image */}
      <HeaderSection title={'With background image'} >
      <div className="mx-1">
        <WithOverlappingImage />
      </div>
      </HeaderSection>
      {/* With Background Image */}
      <HeaderSection title={'With Background Image'} >
      <div className="mx-1">
        <WithBackgroundImage />
      </div>
      </HeaderSection>
      {/* Side_by_Side */}
      <HeaderSection title={'Side_by_Side'} >
      <div className="mx-1">
        <Side_by_Side />
      </div>
      </HeaderSection>
      {/* Side-by-side on dark */}
      <HeaderSection title={'Side-by-side on dark'} >
      <div className="mx-1">
        <Side_by_sideOnDark />
      </div>
      </HeaderSection>
      {/* With star rating */}
      <HeaderSection title={'With star rating'} >
      <div className="mx-1">
        <WithStarRating />
      </div>
      </HeaderSection>
      {/* Grid */}
      <HeaderSection title={'Grid'} >
      <div className="mx-1">
        <Grid />
      </div>
      </HeaderSection>
      {/* Off-white grid */}
      <HeaderSection title={'Off-white grid'} >
      <div className="mx-1">
        <Off_whiteGrid />
      </div>
      </HeaderSection>

    </div>
  )
}

export default Testimonials
import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import SimpleWithDividers from './Simple with dividers'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import CardWithDividers from './Card with dividers'
import CardWithDividersFullWidthOnMobile from './Card with dividers, full-width on mobile'
import SeparateCards from './Separate cards'
import SeparateCardsFullWidthOnMobile from './Separate cards, full-width on mobile'
import FlatCardWithDividers from './Flat card with dividers'
import SimpleWithDividersFullWidthOnMobile from './Simple with dividers, full-width on mobile'

const ListContainer = () => {
  return (
    <div>
      <MainHeaderSection tag={'Layout'} title={'List containers'} />
      <FirstHeaderSection title={'Simple with dividers'}>
      <div className=" border-2 border-gray-200 rounded-lg p-12">
        <SimpleWithDividers />
      </div>
      </FirstHeaderSection>
      {/* Card with dividers */}
      <HeaderSection title={'Card with dividers'}>
      <div className=" border-2 border-gray-200 rounded-lg p-12">
        <CardWithDividers />
      </div>
      </HeaderSection>
      {/* Card with dividers */}
      <HeaderSection title={'Card with dividers, full-width on mobile'}>
      <div className=" border-2 border-gray-200 rounded-lg md:px-12 md:py-8">
        <CardWithDividersFullWidthOnMobile />
      </div>
      </HeaderSection>
    
      {/* Separate cards */}
      <HeaderSection title={'Separate cards'}>
      <div className="  rounded-lg mx-4 md:px-12 md:py-8">
        <SeparateCards />
      </div>
      </HeaderSection>
      {/* Separate cards, full-width on mobile */}
      <HeaderSection title={'Separate cards, full-width on mobile'}>
      <div className="  rounded-lg md:px-12 md:py-8">
        <SeparateCardsFullWidthOnMobile />
      </div>
      </HeaderSection>
      {/* Flat card with dividers */}
      <HeaderSection title={'Flat card with dividers'}>
      <div className="  rounded-lg md:px-12 md:py-8">
        <FlatCardWithDividers />
      </div>
      </HeaderSection>
      {/* Simple with dividers, full-width on mobile */}
      <HeaderSection title={'Simple with dividers, full-width on mobile'}>
      <div className="  rounded-lg md:px-12 md:py-8">
        <SimpleWithDividersFullWidthOnMobile />
      </div>
      </HeaderSection>
    </div>
  )
}

export default ListContainer
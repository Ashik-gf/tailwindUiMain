import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import OffsetWithSupportingText from './Offset with supporting text'
import CenteredAccordion from './Centered accordion'
import CenteredAccordionOnDark from './Centered accordion on dark'
import SideBySide from './Side-by-side'
import ThreeColumns from './Three columns'
import ThreeColumnsOnDark from './Three columns on dark'
import ThreeColumnsIntroduction from './Three columns with centered introduction'
import TwoColumns from './Two columns'
import TwoColumnsOnDark from './Two columns on dark'
import TwoColumnsWithCenteredIntroduction from './Two columns with centered introduction'

const FaQSection = () => {
  return (
    <div>
      <MainHeaderSection goto={'marketing'} section={'Marketing'} title={'FAQs'} tag={'Page Section'} />
      <FirstHeaderSection title={'Offset with supporting text'}>
      <div className="border-2 border-gray-200 rounded-xl">
<OffsetWithSupportingText />
      </div>
      </FirstHeaderSection>
      {/* Centered accordion*/}
      <HeaderSection title={'Centered accordion'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <CenteredAccordion />
      </div>
      </HeaderSection>
      {/* Centered accordion on dark*/}
      <HeaderSection title={'Centered accordion on dark'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <CenteredAccordionOnDark />
      </div>
      </HeaderSection>
      {/* Side-by-side*/}
      <HeaderSection title={'Side-by-side'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <SideBySide />
      </div>
      </HeaderSection>
      {/* Three columns*/}
      <HeaderSection title={'Three columns'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <ThreeColumns />
      </div>
      </HeaderSection>
      {/* Three columns on dark*/}
      <HeaderSection title={'Three columns on dark'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <ThreeColumnsOnDark />
      </div>
      </HeaderSection>
      {/* Three columns with centered introduction*/}
      <HeaderSection title={'Three columns with centered introduction'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <ThreeColumnsIntroduction />
      </div>
      </HeaderSection>
      {/* Two columns*/}
      <HeaderSection title={'Two columns'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <TwoColumns />
      </div>
      </HeaderSection>
      {/* Two columns on dark*/}
      <HeaderSection title={'Two columns on dark'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <TwoColumnsOnDark />
      </div>
      </HeaderSection>
      {/* Two columns with centered introduction*/}
      <HeaderSection title={'Two columns with centered introduction'}>
      <div className="border-2 border-gray-200 rounded-xl">
      <TwoColumnsWithCenteredIntroduction />
      </div>
      </HeaderSection>

    </div>
  )
}

export default FaQSection
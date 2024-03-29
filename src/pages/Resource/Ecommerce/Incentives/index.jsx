import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import ColumnWithIllustrationsAndSplitHeader from './ColumnWithIllustrationsAndSplitHeader'
import ColumnWithIllustrationsAndHeader from './ColumnWithIllustrationsAndHeader'
import ColumnWithIllustrationsAndCenteredText from './ColumnWithIllustrationsAndCenteredText'
import ColumnWithIllustrationsAndHeading from './ColumnWithIllustrationsAndHeading'
import GridWithIllustrations from './GridWithIllustrations'
import ColumnWithIconsAndSupportingText from './ColumnWithIconsAndSupportingText'
import ColumnWithIcons from './ColumnWithIcons'
import ColumnWithIllustrations from './ColumnWithIllustrations'

const Incentives = () => {
  return (
    <div> 
      <MainHeaderSection
    goto={"ecommerce"}
    section={"Ecommerce"}
    title={"Incentives"}
    tag={"Components"}
  />
  <FirstHeaderSection title={"3-column with illustrations and split header"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrationsAndSplitHeader />
    </div>
  </FirstHeaderSection>
  {/* 3-column with illustrations and header */}
  <HeaderSection title={"3-column with illustrations and header"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrationsAndHeader />
    </div>
  </HeaderSection>
  {/* Column WithIllustrationsAndCenteredText */}
  <HeaderSection title={"3-column with illustrations and centered text"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrationsAndCenteredText />
    </div>
  </HeaderSection>
  {/* 3-column with illustrations and heading */}
  <HeaderSection title={"3-column with illustrations and heading"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrationsAndHeading />
    </div>
  </HeaderSection>
  {/* 2x2 grid with illustrations */}
  <HeaderSection title={"2x2 grid with illustrations"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <GridWithIllustrations />
    </div>
  </HeaderSection>
  {/* 3-column with icons and supporting text */}
  <HeaderSection title={"3-column with icons and supporting text"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIconsAndSupportingText />
    </div>
  </HeaderSection>
  {/* 3-column with icons */}
  <HeaderSection title={"3-column with icons"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIcons />
    </div>
  </HeaderSection>
  {/* Column With Illustrations */}
  <HeaderSection title={"Column With Illustrations"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrations />
    </div>
  </HeaderSection>
  {/* Column WithColumnWithIllustrationsAndCenteredText */}
  <HeaderSection title={"Column With Illustrations And Centered Text"}>
    <div className="border-2 border-gray-200 rounded-xl">
      <ColumnWithIllustrationsAndCenteredText />
    </div>
  </HeaderSection>



  </div>
  )
}

export default Incentives
import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import Simple from './Simple'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleOnDark from './Simple grid on dark'
import SimpleGrid from './Simple grid'
import SimpleGridOnDark from './Simple grid on dark'
import WithBackgroundImage from './With background image'
import SplitWithImage from './Split with image'
import Timeline from './Timeline'
import Stepped from './Stepped'
import WithTwoColumnDescriptionOnDark from './With two column description on dark'
import WithDescription from './With description'


const PageSectionStats = () => {
  return (
    <div>
      <MainHeaderSection title={'Stats'} tag={'PAge Section'} />
      <FirstHeaderSection title={'Simple'}>
    <div>
      <Simple />
    </div>
      </FirstHeaderSection>
      {/* Simple on dark */}
      <HeaderSection title={'Simple on dark'}>
<div className="mx-1">
  <SimpleOnDark />
</div>
      </HeaderSection>
      {/* Simple grid */}
      <HeaderSection title={'Simple grid'}>
<div className="mx-1">
  <SimpleGrid />
</div>
      </HeaderSection>
      {/* Simple grid on dark */}
      <HeaderSection title={'Simple grid on dark'}>
<div className="mx-1">
  <SimpleGridOnDark />
</div>
      </HeaderSection>
      {/* With background image */}
      <HeaderSection title={'With background image'}>
<div className="mx-1">
  <WithBackgroundImage />
</div>
      </HeaderSection>
      {/* Split with image */}
      <HeaderSection title={'Split with image'}>
<div className="mx-1">
  <SplitWithImage />
</div>
      </HeaderSection>
      {/* Timeline */}
      <HeaderSection title={'Timeline'}>
<div className="mx-1">
  <Timeline />
</div>
      </HeaderSection>
      {/* Stepped */}
      <HeaderSection title={'Stepped'}>
<div className="mx-1">
  <Stepped />
</div>
      </HeaderSection>
      {/* With two column description on dark */}
      <HeaderSection title={'With two column description on dark'}>
<div className="mx-1">
  <WithTwoColumnDescriptionOnDark />
</div>
      </HeaderSection>
      {/* With description */}
      <HeaderSection title={'With description'}>
<div className="mx-1">
  <WithDescription />
</div>
      </HeaderSection>
    </div>
  )
}

export default PageSectionStats
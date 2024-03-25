import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import TabsWithUnderline from './Tabs with underline'
import TabsWithUnderlineAndIcons from './Tabs with underline and icons'
import TabsInPills from './Tabs in pills'
import TabsInPillsOnGray from './Tabs in pills on gray'
import TabsInPillsWithBrandColor from './Tabs in pills with brand color'
import FullWidthTabsWithUnderline from './Full-width tabs with underline'
import BarWithUnderline from './Bar with underline'
import TabsWithUnderlineAndBadges from './Tabs with underline and badges'
import SimpleOnDark from './Simple on dark'

const Tabs = () => {
  return (
    <div>
        <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Tab'} />
        <FirstHeaderSection title={'Tabs with underline'}>
    <div className="mx-12">
        <TabsWithUnderline />
    </div>
        </FirstHeaderSection>
        {/* Tabs with underline and icons */}
        <HeaderSection title={'Tabs with underline and icons'}>
<div className="mx-12">
    <TabsWithUnderlineAndIcons />
</div>
        </HeaderSection>
        {/* Tabs in pills */}
        <HeaderSection title={'Tabs in pills'}>
<div className="mx-12">
    <TabsInPills />
</div>
        </HeaderSection>
        {/* Tabs in pills on gray */}
        <HeaderSection title={'Tabs in pills on gray'}>
<div className="mx-12">
    <TabsInPillsOnGray />
</div>
        </HeaderSection>
        {/* Tabs in pills with brand color */}
        <HeaderSection title={'Tabs in pills with brand color'}>
<div className="mx-12">
    <TabsInPillsWithBrandColor />
</div>
        </HeaderSection>
        {/* Full-width tabs with underline */}
        <HeaderSection title={'Full-width tabs with underline'}>
<div className="mx-12">
    <FullWidthTabsWithUnderline />
</div>
        </HeaderSection>
        {/* Bar with underline */}
        <HeaderSection title={'Bar with underline'}>
<div className="mx-12">
    <BarWithUnderline />
</div>
        </HeaderSection>
        {/* Tabs with underline and badges */}
        <HeaderSection title={'Tabs with underline and badges'}>
<div className="mx-12">
    <TabsWithUnderlineAndBadges />
</div>
        </HeaderSection>
        {/* Simple on dark */}
        <HeaderSection title={'Simple on dark'}>
<div className="mx-12">
    <SimpleOnDark />
</div>
        </HeaderSection>


    </div>
  )
}

export default Tabs
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import SimpleList from './Simple list'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleInlineList from './Simple inline list'
import ListWithDescription from './List with description'
import ListWithinlineDescription from './List with inline description'
import ListWithRadioOnRight from './List with radio on right'
import SimpleListWithRadioOnRight from './Simple list with radio on right'
import ColorPicker from './Color picker'
import Cards from './Cards'
import SmallCards from './Small cards'
import StackedCards from './Stacked cards'
import SimpleTable from './Simple table'
import ListWithDescriptionsInpanel from './List with descriptions in panel'

const RadioGroups = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Froms'} title={'Radio Groups'} />
      <FirstHeaderSection className={' w-full border-2 border-gray-200 rounded-lg'} title={'Simple list'}>
<div className=" mx-[200px] my-[50px]">
  <SimpleList />
</div>
      </FirstHeaderSection>
    {/* Simple inline list */}
    <HeaderSection title={'Simple inline list'}>
<div className="mx-72 my-24">
  <SimpleInlineList />
</div>
    </HeaderSection>
    {/* List with description */}
    <HeaderSection title={'List with description'}>
<div className="mx-72 my-24">
  <ListWithDescription />
</div>
    </HeaderSection>
    {/* List with inline description */}
    <HeaderSection title={'List with inline description'}>
<div className="mx-72 my-24">
  <ListWithinlineDescription />
</div>
    </HeaderSection>
    {/* List with radio on right */}
    <HeaderSection title={'List with radio on right'}>
<div className="mx-72 my-24">
  <ListWithRadioOnRight />
  </div>
  </HeaderSection>
    {/* Simple list with radio on right */}
    <HeaderSection title={'Simple list with radio on right'}>
<div className="mx-72 my-24">
  <SimpleListWithRadioOnRight />
</div>
    </HeaderSection>
    {/* Color picker */}
    <HeaderSection title={'Color picker'}>
<div className="mx-72 my-24">
  <ColorPicker />
</div>
    </HeaderSection>
    {/* Cards */}
    <HeaderSection title={'Cards'}>
<div className="mx-72 my-24">
  <Cards />
</div>
    </HeaderSection>
    {/* Small cards */}
    <HeaderSection title={'Small cards'}>
<div className="mx-72 my-24">
  <SmallCards />
</div>
    </HeaderSection>
    {/* Stacked cards */}
    <HeaderSection title={'Stacked cards'}>
<div className="mx-72 my-24">
  <StackedCards />
</div>
    </HeaderSection>
    {/* Simple table */}
    <HeaderSection title={'Simple table'}>
<div className="mx-72 my-24">
  <SimpleTable />
</div>
    </HeaderSection>
    {/* ListWithDescriptionsInPanel */}
    <HeaderSection title={'List With Descriptions in Panel'}>
<div className="mx-72 my-24">
  <ListWithDescriptionsInpanel />
</div>
    </HeaderSection>



    </div>
  )
}

export default RadioGroups
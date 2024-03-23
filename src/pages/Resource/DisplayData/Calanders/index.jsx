import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SmallWithMeetings from './Small with meetings'
import MonthViews from './Month view'
import WeekViews from './Week view'
import DayViews from './Day view'
import YearViews from './Year view'
import BorderLess from './Borderless stacked'
import BorderLessSideBySide from './Borderless side-by-side'

const Calanders = () => {
  return (
    <div>
      <MainHeaderSection title={'Calanders'} />
      {/* Small with meetings */}
      <HeaderSection title={'Small with meetings'}>
<div className='mx-40'>
<SmallWithMeetings />
</div>
      </HeaderSection>
      {/* Month view */}
      <HeaderSection title={'Month view'}>
<MonthViews />
      </HeaderSection>
      {/* Week view */}
      <HeaderSection title={'Week view'}>
    <div className="h-[500px]">
      <WeekViews />
    </div>

      </HeaderSection>
      {/* Day view */}
      <HeaderSection title={'Day view'}>
<div className="h-[500px]">
<DayViews />
</div>
      </HeaderSection>
      {/* Year view */}
      <HeaderSection title={'Year view'}>
<YearViews />
      </HeaderSection>
      {/* Borderless stacked */}
      <HeaderSection title={'Borderless stacked'}>
        <div className="mx-60">
          <BorderLess />
        </div>

            </HeaderSection>
      {/* Borderless side-by-side */}
      <HeaderSection title={'Borderless side-by-side'}>
<div className=' mx-20'>
<BorderLessSideBySide />
</div>
      </HeaderSection>
     
    </div>
  )
}

export default Calanders
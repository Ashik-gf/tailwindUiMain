import React from 'react'

import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Simple from './Simple'
import WithLink from './With link'
import WithButtonOnRight from './With button on right'
import WithButtonAtTopRight from './With button at top right'
import WithToggle from './With toggle'
import WithInput from './With input'
import SimpleWell from './Simple well'
import WithWell from './With well'

const ActionPanals = () => {
  return (
    <div>
      <MainHeaderSection tag={'Forms'} title={'Action Panels'} />
      <HeaderSection title={'Action Panels'}>
        <div className=' mx-64'>
        <Simple />
        </div>
      </HeaderSection>
      {/* With link */}
      <HeaderSection title={'With link'}>
        <div className=' mx-64'>
        <WithLink />
        </div>
      </HeaderSection>
      {/*With button on right */}
      <HeaderSection title={'With button on right'}>
        <div className=' mx-64'>
        <WithButtonOnRight />
        </div>
      </HeaderSection>
      {/*With button at top right */}
      <HeaderSection title={'With button at top right'}>
        <div className=' mx-64'>
        <WithButtonAtTopRight />
        </div>
      </HeaderSection>
      {/*With toggle */}
      <HeaderSection title={'With toggle'}>
        <div className=' mx-32'>
        <WithToggle />
        </div>
      </HeaderSection>
      {/*With input */}
      <HeaderSection title={'With input'}>
        <div className=' mx-64'>
        <WithInput />
        </div>
      </HeaderSection>
      {/*Simple well */}
      <HeaderSection title={'Simple well'}>
        <div className=' mx-64'>
        <SimpleWell />
        </div>
      </HeaderSection>
      {/*With well */}
      <HeaderSection title={'With well'}>
        <div className=' mx-64'>
        <WithWell />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ActionPanals
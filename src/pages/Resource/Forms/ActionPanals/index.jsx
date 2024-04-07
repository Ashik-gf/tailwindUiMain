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
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Forms'} title={'Action Panels'} />
      <HeaderSection title={'Action Panels'}>
        <div className=' px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <Simple />
        </div>
      </HeaderSection>
      {/* With link */}
      <HeaderSection title={'With link'}>
        <div className=' px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithLink />
        </div>
      </HeaderSection>
      {/*With button on right */}
      <HeaderSection title={'With button on right'}>
        <div className='px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithButtonOnRight />
        </div>
      </HeaderSection>
      {/*With button at top right */}
      <HeaderSection title={'With button at top right'}>
        <div className='px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithButtonAtTopRight />
        </div>
      </HeaderSection>
      {/*With toggle */}
      <HeaderSection title={'With toggle'}>
        <div className=' px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithToggle />
        </div>
      </HeaderSection>
      {/*With input */}
      <HeaderSection title={'With input'}>
        <div className='px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithInput />
        </div>
      </HeaderSection>
      {/*Simple well */}
      <HeaderSection title={'Simple well'}>
        <div className='px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <SimpleWell />
        </div>
      </HeaderSection>
      {/*With well */}
      <HeaderSection title={'With well'}>
        <div className='px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md'>
        <WithWell />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ActionPanals
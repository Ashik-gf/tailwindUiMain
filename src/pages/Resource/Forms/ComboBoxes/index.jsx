import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import Simple from './Simple'
import WithCheckOnLeft from './With check on left'
import WithStatusIndicator from './With status indicator'
import WithImage from './With image'
import WithSecondaryText from './With secondary text'

const ComboBoxes = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Forms'}  title={'ComboBoxes'}/>
      <HeaderSection  title={'Simple'}>
        <div className="h-[470px] px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <Simple />
        </div>
      </HeaderSection>
      {/* With check on left */}
      <HeaderSection title={'With check on left'}>
      <div className="h-[470px] px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <WithCheckOnLeft />
        </div>
      </HeaderSection>
      {/* With status indicator */}
      <HeaderSection title={'With status indicator'}>
      <div className="h-[470px] px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <WithStatusIndicator />
        </div>
      </HeaderSection>
      {/* With image */}
      <HeaderSection title={'With image'}>
      <div className="h-[470px] px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <WithImage />
        </div>
      </HeaderSection>
      {/*With secondary text */}
      <HeaderSection className={' w-full h-full'} title={'With secondary text'}>
      <div className="h-[470px] px-12 py-24 md:px-20 lg:px-72 border-2 border-gray-200 rounded-md">
          <WithSecondaryText />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ComboBoxes
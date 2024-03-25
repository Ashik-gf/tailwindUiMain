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
        <div className="mx-64 my-8 h-[400px]">
          <Simple />
        </div>
      </HeaderSection>
      {/* With check on left */}
      <HeaderSection title={'With check on left'}>
      <div className="mx-64 my-8 h-[400px]">
          <WithCheckOnLeft />
        </div>
      </HeaderSection>
      {/* With status indicator */}
      <HeaderSection title={'With status indicator'}>
      <div className="mx-64 my-8 h-[400px]">
          <WithStatusIndicator />
        </div>
      </HeaderSection>
      {/* With image */}
      <HeaderSection title={'With image'}>
      <div className="mx-64 my-8 h-[400px]">
          <WithImage />
        </div>
      </HeaderSection>
      {/*With secondary text */}
      <HeaderSection className={' w-full h-full'} title={'With secondary text'}>
      <div className="mx-64 my-8 h-[400px]">
          <WithSecondaryText />
        </div>
      </HeaderSection>
    </div>
  )
}

export default ComboBoxes
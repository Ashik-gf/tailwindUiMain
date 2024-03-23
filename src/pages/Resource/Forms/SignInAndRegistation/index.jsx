import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Simple from './Simple card'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleOnDark from './Simple on dark/indecx'
import SplitScreen from './Split screen'
import SimpleNoLabels from './Simple no labels'

const SignInAndRegistation = () => {
  return (
    <div>
      <MainHeaderSection tag={'Froms'} className={'border-2'} title={'Select Menus'}></MainHeaderSection>
      <FirstHeaderSection className={'border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-full'} title={'Simple'}>
      <div className='mx-[10px] my-12  content-center'>
<Simple />
    </div>
      </FirstHeaderSection>
      {/* Simple on dark */}
      <HeaderSection title={'Simple on Dark'} className={''}>
      <div className='mx-[100px] my-12  bg-gray-800 rounded-md content-center'>
<SimpleOnDark />
    </div>
      </HeaderSection>
      {/* Simple no labels */}
      <HeaderSection title={'Simple no labels'}>
      <div className='mx-[100px] my-12  content-center'>
<SimpleNoLabels />
    </div>
      </HeaderSection>
      {/* Split screen */}
      <HeaderSection title={'Split screen'}>
      <div className='mx-[10px] my-12  content-center'>
<SplitScreen />
    </div>
      </HeaderSection>

    </div>
  )
}

export default SignInAndRegistation
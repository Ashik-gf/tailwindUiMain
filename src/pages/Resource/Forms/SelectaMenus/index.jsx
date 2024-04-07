import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import SeactionHeading from '@pages/Resource/Heading/SeactionHeading'
import CustomWithAvatar from './Custom with avatar'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import CustomWithCheckOnLeft from './Custom with check on left'
import CustomWithStatusIndicator from './Custom with status indicator'
import WithSecondaryText from './With secondary text'
import BrandedWithSupportedText from './Branded with supported text'

const SelectsMenus = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Forms'} className={'border-2'} title={'Select Menus'}></MainHeaderSection>
      <FirstHeaderSection className={'border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'} title={'Custom with avatar'}>
      <div className=' px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
<CustomWithAvatar />
    </div>
      </FirstHeaderSection>
      {/* Simple native */}
      <HeaderSection title={'Simple Native'}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
<CustomWithCheckOnLeft />
    </div>
      </HeaderSection>
      {/* Simple custom */}
      <HeaderSection title={'Simple custom'}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
<CustomWithCheckOnLeft />
    </div>
      </HeaderSection>
      {/* Custom with check on left */}
      <HeaderSection title={'Custom with check on left'}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
<CustomWithCheckOnLeft />
    </div>
      </HeaderSection>
      {/* Custom with status indicator  */}
      <HeaderSection title={'Custom with status indicator '}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
< CustomWithStatusIndicator/>
    </div>
      </HeaderSection>
      {/* With secondary text  */}
      <HeaderSection title={'With secondary text '}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
< WithSecondaryText/>
    </div>
      </HeaderSection>
      {/* Branded with supported text  */}
      <HeaderSection title={'Branded with supported text '}>
      <div className='px-[100px] sm:px-[200px] pt-4 border-2 border-gray-200 bg-[#F3F4F6] rounded-lg h-[350px]'>
< BrandedWithSupportedText />
    </div>
      </HeaderSection>
     
    </div>
  )
}

export default SelectsMenus
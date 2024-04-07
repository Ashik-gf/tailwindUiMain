import React from 'react'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Contained from './Contained'
import FullWidthBar from './Full-width bar'
import SimpleWithChevrons from './Simple with chevrons'
import SimpleWithSlashes from './Simple with slashes'

const Breadcrumbs = () => {
  return (
    <div>
      <MainHeaderSection
       goto={'appui'} 
       section={'Application UI'} 
       tag={'Navigations'} 
       title={'Breadcrumbs'}
       />
      <HeaderSection className={''} title={'Contained'}>
        <div className=' h-full py-24 px-12 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
    <Contained />
        </div>
      </HeaderSection>

      {/* Full-width bar */}
      <HeaderSection title={'Full-width bar'}>
      <div className=' h-full py-20 md:px-20  border-2 border-gray-200 rounded-md '>
    <FullWidthBar />
        </div>
      </HeaderSection>

      {/* Simple with chevrons */}
      <HeaderSection title={'Simple with chevrons'}>
      <div className=' h-full p-24  md:px-20 lg:px-60 border-2 border-gray-200 rounded-md '>
    <SimpleWithChevrons />
        </div>
      </HeaderSection>
   
      {/* Simple with slashes */}
      <HeaderSection title={'Simple with slashes'}>
      <div className=' h-full p-24  md:px-20 lg:px-60 border-2 border-gray-200 rounded-md '>
    <SimpleWithSlashes />
        </div>
      </HeaderSection>
    </div>
  )
}

export default Breadcrumbs
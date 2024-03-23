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
      <MainHeaderSection tag={'Navigations'} />
      <HeaderSection className={''} title={'Contained'}>
        <div className=' mx-64 my-24 '>
    <Contained />
        </div>
      </HeaderSection>
      {/* Full-width bar */}
      <HeaderSection title={'Full-width bar'}>
      <div className=' mx-64 my-24 '>
    <FullWidthBar />
        </div>
      </HeaderSection>
      {/* Simple with chevrons */}
      <HeaderSection title={'Simple with chevrons'}>
      <div className=' mx-64 my-24 '>
    <SimpleWithChevrons />
        </div>
      </HeaderSection>
   
      {/* Simple with slashes */}
      <HeaderSection title={'Simple with slashes'}>
      <div className=' mx-64 my-24 '>
    <SimpleWithSlashes />
        </div>
      </HeaderSection>
    </div>
  )
}

export default Breadcrumbs
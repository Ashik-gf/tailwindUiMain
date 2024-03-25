import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleCardFooter from './Simple card footer'
import CenteredPageNumbers from './Centered page numbers'
import CardFooterWithPageButtons from './Card footer with page buttons'

const Pagination = () => {
  return (
    <div>
        <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Pagination'} />
        <FirstHeaderSection title={'Card footer with page buttons'}>
<div className="mx-8">
  <SimpleCardFooter />
</div>
        </FirstHeaderSection>
        <HeaderSection title={'Card Footer With Page Buttons'}>
<div>
<CardFooterWithPageButtons />
</div>
        </HeaderSection>
        <HeaderSection title={'Centered Page Numbers'}>
<div>
<CenteredPageNumbers />
</div>
        </HeaderSection>
    </div>
  )
}

export default Pagination
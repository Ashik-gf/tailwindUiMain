import React from 'react'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import WithLabel from './With label'
import WithIcon from './With icon'
import WithLabelOnLeft from './WithLabelOnLeft'
import WithTitle from './With title'
import WithTitleOnLeft from './With title on left'
import WithButton from './With button'
import WithTitleAndButton from './With title and button'
import WithToolbar from './With toolbar'

const Deviders = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} title={'Dividers'} tag={"Layout"}/>
      <HeaderSection title={'With label'}>
<div className="mx-12 py-12">
  <WithLabel />
</div>
      </HeaderSection>
      {/* With icon */}
      <HeaderSection title={'With icon'}>
<div className="mx-12 py-12">
  <WithIcon />
</div>
      </HeaderSection>
      {/* With label on left */}
      <HeaderSection title={'With label on left'}>
<div className="mx-12 py-12">
  <WithLabelOnLeft />
</div>
      </HeaderSection>
      {/* With title */}
      <HeaderSection title={'With title'}>
<div className="mx-12 py-12">
  <WithTitle />
</div>
      </HeaderSection>
      {/* With title on left */}
      <HeaderSection title={'With title on left'}>
<div className="mx-12 py-12">
  <WithTitleOnLeft />
</div>
      </HeaderSection>
      {/* With button */}
      <HeaderSection title={'With button'}>
<div className="mx-12 py-12">
  <WithButton />
</div>
      </HeaderSection>
      {/* With title and button */}
      <HeaderSection title={'With title and button'}>
<div className="mx-12 py-12">
  <WithTitleAndButton />
</div>
      </HeaderSection>
      {/* With toolbar */}
      <HeaderSection title={'With toolbar'}>
<div className="mx-12 py-12">
  <WithToolbar />
</div>
      </HeaderSection>
      
    </div>
  )
}

export default Deviders
import React from 'react'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Simple from './Simple'
import WithDashedborder from './With dashed border'
import WithStartingPoints from './With starting points'
import WithRecommendations from './With recommendations'
import WithTemplates from './With templates'
import WithRecommendationsGrid from './With recommendations grid'

const EmptyState = () => {
  return (
    <div>
      <MainHeaderSection tag={'FeedBack'} />
      <HeaderSection title={'Simple'}>
      <div className="mx-64 my-8">
        <Simple />
      </div>
      </HeaderSection>
      {/* With dashed border */}
      <HeaderSection title={'With dashed border'}>
      <div className="mx-64 my-8">
        <WithDashedborder />
      </div>
      </HeaderSection>
      {/* With starting points */}
      <HeaderSection title={'With starting points'}>
      <div className="mx-64 my-8">
        <WithStartingPoints />
      </div>
      </HeaderSection>
      {/* With recommendations */}
      <HeaderSection title={'With recommendations'}>
      <div className="mx-64 my-8">
        <WithRecommendations />
      </div>
      </HeaderSection>
      {/* {/* With templates */}
      // <HeaderSection title={'With templates'}>
      <div className="mx-64 my-8">
        <WithTemplates />
      </div>
      </HeaderSection>
      {/* {/* With recommendations grid */}
      // <HeaderSection title={'With recommendations grid'}>
      <div className="mx-64 my-8">
        <WithRecommendationsGrid />
      </div>
      </HeaderSection>
    </div>
  )
}

export default EmptyState
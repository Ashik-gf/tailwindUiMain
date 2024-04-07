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
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'FeedBack'} />
      <HeaderSection title={'Simple'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <Simple />
      </div>
      </HeaderSection>
      {/* With dashed border */}
      <HeaderSection title={'With dashed border'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <WithDashedborder />
      </div>
      </HeaderSection>
      {/* With starting points */}
      <HeaderSection title={'With starting points'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <WithStartingPoints />
      </div>
      </HeaderSection>
      {/* With recommendations */}
      <HeaderSection title={'With recommendations'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <WithRecommendations />
      </div>
      </HeaderSection>
      {/* {/* With templates */}
      // <HeaderSection title={'With templates'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <WithTemplates />
      </div>
      </HeaderSection>
      {/* {/* With recommendations grid */}
      // <HeaderSection title={'With recommendations grid'}>
      <div className="h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md">
        <WithRecommendationsGrid />
      </div>
      </HeaderSection>
    </div>
  )
}

export default EmptyState
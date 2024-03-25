import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import FullWidthOnMobileConstrainedWithPaddedContentAbove from './Full-width on mobile, constrained with padded content above'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import ConstrainedWithPaddedContent from './Constrained with padded content'
import MobilePreview from './Full-width on mobile, constrained to breakpoint with padded content above mobile Preview'
import NarrowConstrainedWithPaddedContent from './Narrow constrained with padded content'

const Containers = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} title={'Containers'} tag={'Layout'} />
      <FirstHeaderSection title={'Full-width on mobile, constrained with padded content above'}>
        <div className="div h-[320px] border-2 border-gray-200/90 rounded-lg">
          <FullWidthOnMobileConstrainedWithPaddedContentAbove />
        </div>
      </FirstHeaderSection>
      {/* Constrained with padded content */}
      <HeaderSection title={'Constrained with padded content'}>
      <div className="div h-[320px] border-2 border-gray-200/90 rounded-lg bg-gray-200">
          <ConstrainedWithPaddedContent />
        </div>
      </HeaderSection>
      {/* Full-width on mobile, constrained to breakpoint with padded content above mobile */}
      <HeaderSection title={'Full-width on mobile, constrained to breakpoint with padded content above mobile'}>
      <div className="div h-[320px] border-2 border-gray-200/90 rounded-lg">
          < MobilePreview />
        </div>
      </HeaderSection>
      {/* Constrained to breakpoint with padded content */}
      <HeaderSection title={'Constrained to breakpoint with padded content'}>
      <div className="div h-[320px] border-2 border-gray-200/90 rounded-lg">
          < ConstrainedWithPaddedContent />
        </div>
      </HeaderSection>
      {/* Narrow constrained with padded content */}
      <HeaderSection title={'Narrow constrained with padded content'}>
      <div className="div h-[320px] border-2 border-gray-200/90 rounded-lg">
          < NarrowConstrainedWithPaddedContent
 />
        </div>
      </HeaderSection>
    </div>
  )
}

export default Containers
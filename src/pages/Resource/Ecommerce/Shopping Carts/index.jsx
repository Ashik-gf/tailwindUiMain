import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Slide_over from './Slide-over'

import Single_column from './Single column'
import PopOver from './Popover'
import With_extended_summary from './With extended summary'
import Modal from './Modal'

const Shopping_Carts = () => {
  return (
    <div>
       <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Shoping Carts"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"Slide-over"}>
        <div className="border-2 border-gray-200 rounded-xl">
       <Slide_over />
        </div>
      </FirstHeaderSection>
      {/* Simple */}
      <HeaderSection title={'Simple'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Single_column />
        </div>
      </HeaderSection>
      {/* PopOver */}
      <HeaderSection title={'PopOver'}>
      <div className="border-2 border-gray-200 rounded-xl h-[400px]">
          <PopOver />
        </div>
      </HeaderSection>
      {/* With_extended_summary */}
      <HeaderSection title={'With extended summary'}>
      <div className="border-2 border-gray-200 rounded-xl h-full">
          <With_extended_summary />
        </div>
      </HeaderSection>
      {/* Modal */}
      <HeaderSection title={'Modal'}>
      <div className="border-2 border-gray-200 rounded-xl h-full">
          <Modal />
        </div>
      </HeaderSection>

    </div>
  )
}

export default Shopping_Carts
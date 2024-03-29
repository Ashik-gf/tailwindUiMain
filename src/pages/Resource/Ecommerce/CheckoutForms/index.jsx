import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import SingleStepWithOrderSummary from "./SingleStepWithOrderSummary"
import With_mobile_order_summary_overlay from './With mobile order summary overlay'
import Multi_step from './Multi_step'
import With_order_summary_sidebar from './With order summary sidebar'
import Split_with_order_summary from './Split with order summary'

const CheckoutForms = () => {
  return (
    <div>
       <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Checkout Forms"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"Single Step With Order Summary"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <SingleStepWithOrderSummary />
        </div>
      </FirstHeaderSection>
      {/* With mobile order summary overlay */}
      <HeaderSection title={'With mobile order summary overlay'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_mobile_order_summary_overlay />
        </div>
      </HeaderSection>
      {/* Multi-step */}
      <HeaderSection title={'Multi-step'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Multi_step />
        </div>
      </HeaderSection>
      {/* With order summary sidebar */}
      <HeaderSection title={'With order summary sidebar'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <With_order_summary_sidebar />
        </div>
      </HeaderSection>
      {/* Split with order summary */}
      <HeaderSection title={'Split with order summary'}>
      <div className="border-2 border-gray-200 rounded-xl">
          <Split_with_order_summary />
        </div>
      </HeaderSection>
    </div>
  )
}

export default CheckoutForms
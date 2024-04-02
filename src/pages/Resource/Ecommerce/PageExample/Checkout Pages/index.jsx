import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import With_order_summary_sidebar from './With order summary sidebar'
import Single_step_with_order_summary from './Single step with order summary'
import With_mobile_order_summary_overlay from './With mobile order summary overlay'
import Multi_step from './Multi-step'

const CheckoutPages = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Checkout Pages"}
        tag={"Page Example"}
      />
      <FirstHeaderSection title={"With order summary sidebar"}>
        <div className="border-2 border-gray-200 rounded-xl">
    <With_order_summary_sidebar />
        </div>
      </FirstHeaderSection>
      {/* InvoiceTable */}
      <HeaderSection title={"Single step with order summary"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Single_step_with_order_summary />
        </div>
      </HeaderSection>
      {/* With mobile order summary overlay */}
      <HeaderSection title={"With mobile order summary overlay"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_mobile_order_summary_overlay />
        </div>
      </HeaderSection>
      {/* Multi-step */}
      <HeaderSection title={"Multi-step"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Multi_step />
        </div>
      </HeaderSection>
      {/* Split with order summary */}
      <HeaderSection title={"Split with order summary"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Multi_step />
        </div>
      </HeaderSection>
    </div>
  )
}

export default CheckoutPages
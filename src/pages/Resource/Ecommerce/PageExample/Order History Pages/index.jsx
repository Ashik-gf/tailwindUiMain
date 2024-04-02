import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Simple from './Order History Pages'
import With_invoice_list_and_quick_actions from './With invoice list and quick actions'
import With_invoice_panels from './With invoice panels'
import With_invoice_tables from './With invoice tables'
import With_invoice_list from './With invoice list'

const OrderHistoryPages = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Order History Pages"}
        tag={"Page Example"}
      />
  
      {/* Simple */}
      <HeaderSection title={"Simple"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <Simple />
        </div>
      </HeaderSection>
      {/* With invoice list and quick actions */}
      <HeaderSection title={"With invoice list and quick actions"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_invoice_list_and_quick_actions />
        </div>
      </HeaderSection>
      {/* With invoice panels */}
      <HeaderSection title={"With invoice panels"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_invoice_panels />
        </div>
      </HeaderSection>
      {/* With invoice tables */}
      <HeaderSection title={"With invoice tables"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_invoice_tables />
        </div>
      </HeaderSection>
      {/* With invoice list */}
      <HeaderSection title={"With invoice list"}>
        <div className="border-2 border-gray-200 rounded-xl">
         <With_invoice_list />
        </div>
      </HeaderSection>
    </div>
  )
}

export default OrderHistoryPages
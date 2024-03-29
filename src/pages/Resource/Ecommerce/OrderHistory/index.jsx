import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import InvoicePanels from "./InvoicePanels";
import InvoiceTable from "./InvoiceTable";
import InvoiceList from "./InvoiceList";
import InvoiceListWithQuickActions from "./InvoiceListWithQuickActions";

const OrderHistory = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"ecommerce"}
        section={"Ecommerce"}
        title={"Order History"}
        tag={"Components"}
      />
      <FirstHeaderSection title={"Invoice panels"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <InvoicePanels />
        </div>
      </FirstHeaderSection>
      {/* InvoiceTable */}
      <HeaderSection title={"Invoice table"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <InvoiceTable />
        </div>
      </HeaderSection>
      {/* Invoice list */}
      <HeaderSection title={"Invoice list"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <InvoiceList />
        </div>
      </HeaderSection>
      {/* Invoice list with quick actions */}
      <HeaderSection title={"Invoice list with quick actions"}>
        <div className="border-2 border-gray-200 rounded-xl">
          <InvoiceListWithQuickActions />
        </div>
      </HeaderSection>
    </div>
  );
};

export default OrderHistory;

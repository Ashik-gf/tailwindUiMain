import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import Column4WithCompanyMissioOonDark from "./4-column with company mission on dark";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Column4WithCompanyMission from "./4-column with company mission";
import Column4SimpleDark from "./4-column simple dark";
import ColumnSimple from "./4-column simple";
import ColumNewsletterDark from "./4-column with newsletter dark";
import ColumnBelowDark from "./4-column with newsletter below dark";
import NewsletterBelow from "./4-column with newsletter below";
import SimpleCentered from "./Simple centered";
import SocialLinks from "./Social links only";
import Newsletter4Columns from "./4-column with newsletter";

const FooterSection = () => {
  return (
    <div>
      <MainHeaderSection title={"Footers"} tag={"Page Section"} />
      <FirstHeaderSection title={"4-column with company mission on dark"}>
        <div className="">
          <Column4WithCompanyMissioOonDark />
        </div>
      </FirstHeaderSection>
      {/* 4-column with company mission */}
      <HeaderSection title={"4-column with company mission"}>
        <div className="div">
          <Column4WithCompanyMission />
        </div>
      </HeaderSection>
      {/* 4-column simple dark */}
      <HeaderSection title={"4-column simple dark"}>
        <div className="div">
          <Column4SimpleDark />
        </div>
      </HeaderSection>
      {/* 4-column simple */}
      <HeaderSection title={"4-column simple"}>
        <div className="div">
          <ColumnSimple />
        </div>
      </HeaderSection>
      {/* 4-column with newsletter dark */}
      <HeaderSection title={"4-column with newsletter dark"}>
        <div className="div">
          <ColumNewsletterDark />
        </div>
      </HeaderSection>
      {/* 4-column with newsletter */}
      <HeaderSection title={"4-column with newsletter"}>
        <div className="div">
          <Newsletter4Columns />
        </div>
      </HeaderSection>
      {/* 4-column with newsletter below dark*/}
      <HeaderSection title={"4-column with newsletter below dark"}>
        <div className="div">
          <ColumnBelowDark />
        </div>
      </HeaderSection>
      {/* 4-column with newsletter below*/}
      <HeaderSection title={"4-column with newsletter below"}>
        <div className="div">
          <NewsletterBelow />
        </div>
      </HeaderSection>
      {/* Simple centered*/}
      <HeaderSection title={"Simple centered"}>
        <div className="div">
          <SimpleCentered />
        </div>
      </HeaderSection>
      {/* Social links only*/}
      <HeaderSection title={"Social links only"}>
        <div className="div">
          <SocialLinks />
        </div>
      </HeaderSection>



    </div>
  );
};

export default FooterSection;

import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SidebarOnDark from "./Sidebar on dark";
import Stacked from "./Stacked";

const HomeScreen = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} title={"Home Screen"} tag={"Page Example"} />
      <HeaderSection title={"Side ar On Dark"}>
        <div className="p-2">
          <SidebarOnDark />
        </div>
      </HeaderSection>
      <HeaderSection title={"Stacked"}>
        <div className="p-2">
          <Stacked />
        </div>
      </HeaderSection>
    </div>
  );
};

export default HomeScreen;

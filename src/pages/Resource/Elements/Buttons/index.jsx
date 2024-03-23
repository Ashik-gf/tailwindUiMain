import React from "react";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import MainHeaderSection from "@shared/components/MainHeader";
import PrimaryButtons from "./Primary buttons'";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SecondaryButtons from "./Secondary buttons";
import PrimaryButtonsOnDark from "./Primary buttons on dark";
import SecondaryButtonsOnDark from "./Secondary buttons on dark";
import SoftButtons from "./Soft buttons";
import ButtonsWithleadingIcon from "./Buttons with leading icon";
import ButtonsWithtrailingIcon from "./Buttons with trailing icon";
import RoundedPrimaryButtons from "./Rounded primary buttons";
import RoundedSecondaryButtons from "./Rounded secondary buttons";
import CircularButtons from "./Circular buttons";

const Button = () => {
  return (
    <div>
      <MainHeaderSection title={"Button"} tag={"Elements"} />
      <FirstHeaderSection title={"Primary buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12 ">
          <PrimaryButtons />
        </div>
      </FirstHeaderSection>
      {/* Secondary buttons */}
      <HeaderSection title={"Secondary buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <SecondaryButtons />
        </div>
      </HeaderSection>
      {/* Primary buttons on dark */}
      <HeaderSection title={"Primary buttons on dark"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <PrimaryButtonsOnDark />
        </div>
      </HeaderSection>
      {/* Secondary buttons on dark */}
      <HeaderSection title={"Secondary buttons on dark"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <SecondaryButtonsOnDark />
        </div>
      </HeaderSection>
      {/* Soft buttons */}
      <HeaderSection title={"Soft buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <SoftButtons />
        </div>
      </HeaderSection>
      {/* Buttons with leading icon */}
      <HeaderSection title={"Buttons with leading icon"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <ButtonsWithleadingIcon />
        </div>
      </HeaderSection>
      {/* Buttons with trailing icon */}
      <HeaderSection title={"Buttons with trailing icon"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <ButtonsWithtrailingIcon />
        </div>
      </HeaderSection>
      {/* Rounded primary buttons */}
      <HeaderSection title={"Rounded primary buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <RoundedPrimaryButtons />
        </div>
      </HeaderSection>
      {/* Rounded secondary buttons */}
      <HeaderSection title={"Rounded secondary buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <RoundedSecondaryButtons />
        </div>
      </HeaderSection>
      {/* Circular buttons */}
      <HeaderSection title={"Circular buttons"}>
        <div className="border-2 rounded-lg  flex justify-center items-center py-12">
          <CircularButtons />
        </div>
      </HeaderSection>
    </div>
  );
};

export default Button;

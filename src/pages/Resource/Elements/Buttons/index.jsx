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
      <MainHeaderSection
        title={"Buttons"}
        goto={"applicationui"}
        section={"Application UI"}
        tag={"Elements"}
      />
      <FirstHeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Primary buttons"}
      >
        <PrimaryButtons />
      </FirstHeaderSection>
      {/* Secondary buttons */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Secondary buttons"}
      >
        <SecondaryButtons />
      </HeaderSection>
      {/* Primary buttons on dark */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Primary buttons on dark"}
      >
        <PrimaryButtonsOnDark />
      </HeaderSection>
      {/* Secondary buttons on dark */}
      <HeaderSection
        className={" bg-gray-900  py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Secondary buttons on dark"}
      >
        <SecondaryButtonsOnDark />
      </HeaderSection>
      {/* Soft buttons */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Soft buttons"}
      >
        <SoftButtons />
      </HeaderSection>
      {/* Buttons with leading icon */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Buttons with leading icon"}
      >
        <ButtonsWithleadingIcon />
      </HeaderSection>
      {/* Buttons with trailing icon */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Buttons with trailing icon"}
      >
        <ButtonsWithtrailingIcon />
      </HeaderSection>
      {/* Rounded primary buttons */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Rounded primary buttons"}
      >
        <RoundedPrimaryButtons />
      </HeaderSection>
      {/* Rounded secondary buttons */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Rounded secondary buttons"}
      >
        <RoundedSecondaryButtons />
      </HeaderSection>
      {/* Circular buttons */}
      <HeaderSection
        className={" py-8 sm:py-24 px-40 sm:px-[200px]"}
        title={"Circular buttons"}
      >
        <CircularButtons />
      </HeaderSection>
    </div>
  );
};

export default Button;

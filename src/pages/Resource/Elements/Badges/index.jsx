import React from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import WithBorder from "./With border";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import WithBorderAndDotOnDark from "./With border and dot on dark";
import WithBorderOnDark from "./With border on dark";
import WithBorderAndDot from "./With border and dot";
import PillWithBorder from "./Pill with border";
import PillWithBorderAndDot from "./Pill with border and dot";
import WithBorderAndRemoveButton from "./With border and remove button";
import Flat from "./Flat";
import FlatPill from "./Flat pill";
import FlatWithDot from "./Flat with dot";
import FlatPillWithDot from "./Flat pill with dot";
import FlatWithRemoveButton from "./Flat with remove button";
import SmallWithBorder from "./Small with border";
import SmallFlat from "./Small flat";
import SmallPillWithBorder from "./Small pill with border";
import SmallFlatPill from "./Small flat pill";
import SmallFlatWithDot from "./Small flat with dot";
import SmallFlatPillWithDot from "./Small flat pill with dot";

const Badges = () => {
  return (
    <div>
      <MainHeaderSection tag={"Elements"} title={"Badges"} />
      <FirstHeaderSection
        className={" px-5 py-10"}
        title={"With border"}
      >
        <WithBorder />
      </FirstHeaderSection>
      {/* With border on dark */}
      <HeaderSection className={""} title={"With border on dark"}>
        <div className=" bg-black rounded-lg flex justify-center items-center py-12">
          <WithBorderOnDark />
        </div>
      </HeaderSection>
      {/* With border and dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"With border and dot"}
      >
        <WithBorderAndDot />
      </HeaderSection>
      {/* With border and dot on dark */}
      <HeaderSection title={"With border and dot on dark"}>
        <div>
          <WithBorderAndDotOnDark />
        </div>
      </HeaderSection>
      {/* Pill with border */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Pill with border"}
      >
        <PillWithBorder />
      </HeaderSection>
      {/* Pill with border and dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Pill with border and dot"}
      >
        <PillWithBorderAndDot />
      </HeaderSection>
      {/* With border and remove button */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"With border and remove button"}
      >
        <WithBorderAndRemoveButton />
      </HeaderSection>
      {/* Flat */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Flat"}
      >
        <Flat />
      </HeaderSection>
      {/* Flat pill */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Flat pill"}
      >
        <FlatPill />
      </HeaderSection>
      {/* Flat with dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Flat with dot"}
      >
        <FlatWithDot />
      </HeaderSection>
      {/* Flat pill with dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Flat pill with dot"}
      >
        <FlatPillWithDot />
      </HeaderSection>
      {/* Flat with remove button */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Flat with remove button"}
      >
        <FlatWithRemoveButton />
      </HeaderSection>
      {/* Small with border */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small with border"}
      >
        <SmallWithBorder />
      </HeaderSection>
      {/* Small flat */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small flat"}
      >
        <SmallFlat />
      </HeaderSection>
      {/* Small pill with border */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small pill with border"}
      >
        <SmallPillWithBorder />
      </HeaderSection>
      {/* Small flat pill */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small flat pill"}
      >
        <SmallFlatPill />
      </HeaderSection>
      {/* Small flat with dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small flat with dot"}
      >
        <SmallFlatWithDot />
      </HeaderSection>
      {/* Small flat pill with dot */}
      <HeaderSection
        className={"  rounded-md px-5 py-10"}
        title={"Small flat pill with dot"}
      >
        <SmallFlatPillWithDot />
      </HeaderSection>
    </div>
  );
};

export default Badges;

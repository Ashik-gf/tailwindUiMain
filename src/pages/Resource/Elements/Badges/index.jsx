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
        className={"border-[2px] border-gray-200 rounded-lg "}
        title={"With border"}
      >
        <div className=" flex justify-center items-center py-12 border-1 border-gray-200 ">
          <WithBorder />
        </div>
      </FirstHeaderSection>
      {/* With border on dark */}
      <HeaderSection className={''} title={"With border on dark"}>
        <div className=" bg-black rounded-lg flex justify-center items-center py-12">
          <WithBorderOnDark />
        </div>
      </HeaderSection>
      {/* With border and dot */}
      <HeaderSection title={"With border and dot"}>
        <div className="flex justify-center items-center py-12">
          <WithBorderAndDot />
        </div>
      </HeaderSection>
      {/* With border and dot on dark */}
      <HeaderSection title={"With border and dot on dark"}>
        <div className=" bg-black flex justify-center items-center py-12">
          <WithBorderAndDotOnDark />
        </div>
      </HeaderSection>
      {/* Pill with border */}
      <HeaderSection title={"Pill with border"}>
        <div className="flex justify-center items-center py-12">
          <PillWithBorder />
        </div>
      </HeaderSection>
      {/* Pill with border and dot */}
      <HeaderSection title={"Pill with border and dot"}>
        <div className="flex justify-center items-center py-12">
          <PillWithBorderAndDot />
        </div>
      </HeaderSection>
      {/* With border and remove button */}
      <HeaderSection title={"With border and remove button"}>
        <div className="flex justify-center items-center py-12">
          <WithBorderAndRemoveButton />
        </div>
      </HeaderSection>
      {/* Flat */}
      <HeaderSection title={"Flat"}>
        <div className="flex justify-center items-center py-12">
          <Flat />
        </div>
      </HeaderSection>
      {/* Flat pill */}
      <HeaderSection title={"Flat pill"}>
        <div className="flex justify-center items-center py-12">
          <FlatPill />
        </div>
      </HeaderSection>
      {/* Flat with dot */}
      <HeaderSection title={"Flat with dot"}>
        <div className="flex justify-center items-center py-12">
          <FlatWithDot />
        </div>
      </HeaderSection>
      {/* Flat pill with dot */}
      <HeaderSection title={"Flat pill with dot"}>
        <div className="flex justify-center items-center py-12">
          <FlatPillWithDot />
        </div>
      </HeaderSection>
      {/* Flat with remove button */}
      <HeaderSection title={"Flat with remove button"}>
        <div className="flex justify-center items-center py-12">
          <FlatWithRemoveButton />
        </div>
      </HeaderSection>
      {/* Small with border */}
      <HeaderSection title={"Small with border"}>
        <div className="flex justify-center items-center py-12">
          <SmallWithBorder />
        </div>
      </HeaderSection>
      {/* Small flat */}
      <HeaderSection title={"Small flat"}>
        <div className="flex justify-center items-center py-12">
          <SmallFlat />
        </div>
      </HeaderSection>
      {/* Small pill with border */}
      <HeaderSection title={"Small pill with border"}>
        <div className="flex justify-center items-center py-12">
          <SmallPillWithBorder />
        </div>
      </HeaderSection>
      {/* Small flat pill */}
      <HeaderSection title={"Small flat pill"}>
        <div className="flex justify-center items-center py-12">
          <SmallFlatPill />
        </div>
      </HeaderSection>
      {/* Small flat with dot */}
      <HeaderSection title={"Small flat with dot"}>
        <div className="flex justify-center items-center py-12">
          <SmallFlatWithDot />
        </div>
      </HeaderSection>
      {/* Small flat pill with dot */}
      <HeaderSection title={"Small flat pill with dot"}>
        <div className="flex justify-center items-center py-12">
          <SmallFlatPillWithDot />
        </div>
      </HeaderSection>

    </div>
  );
};

export default Badges;

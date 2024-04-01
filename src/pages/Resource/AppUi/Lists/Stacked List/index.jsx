import React from "react";
import { BsCopy } from "react-icons/bs";
import { Link } from "react-router-dom";

import Simple from "./Simple";
import SimpleOnDrak from "./Simple on dark";
import WithLinks from "./With links";
import WithInlineLinksAndAvatarGroup from "./With inline links and avatar group";
import WithInlineLinksAndActionsMenu from "./With inline links and actions menu";
import WithBadgesButtonAndActionsMenu from "./With badges, button, and actions menu";
import InCardWithLiks from "./In card with links";
import TwoColumnsWithLinks from "./Two columns with links";
import FullWidthWithLinks from "./Full width with links";
import FullWidthWithConstrainedContent from "./Full-width with constrained content";
import Narrow from "./Narrow";
import NarrowWithStickyHeadings from "./Narrow with sticky headings";
import NarrowWithActions from "./Narrow with actions";
import NarrowWithTruncatedContent from "./Narrow with truncated content";
import NarrowWithSmallAvatars from "./Narrow with small avatars";
import NarrowWithSmallAvatarsOnDark from "./Narrow with small avatars on dark";
import NarrowWithBadgesonDark from "./Narrow with badges on dark";
import MainHeaderSection from "@shared/components/MainHeader";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";

const StackedList = () => {
  return (
    <div>
      <MainHeaderSection
        goto={"Application UI"}
        section={"Application Ui"}
        title={"Sacked List"}
        tag={"Application Shell"}
      />
      <FirstHeaderSection title={"Simple"}>
        <div className=" border-[1px] border-gray-200 rounded-lg sm:px-32 px-4">
              <Simple />
        </div>
    
      </FirstHeaderSection>

      {/* SimpleOnDrak */}
    <HeaderSection title={'Simple On Dark'}>
      <div className="border-2 bg-gray-900 border-gray-200 rounded-lg sm:px-8 py-3 px-4">
      <SimpleOnDrak />
      </div>
    </HeaderSection>
    <HeaderSection title={'With Links'}>
      <div className="border-2 border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <WithLinks />
      </div>
    </HeaderSection>
    <HeaderSection title={'With Inline Links And avatar Group'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <WithInlineLinksAndAvatarGroup />
      </div>
    </HeaderSection>
    <HeaderSection title={' With inline links and actions menu'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <WithInlineLinksAndActionsMenu />
      </div>
    </HeaderSection>
    <HeaderSection title={' With Badges Button And Actions Menu'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <WithBadgesButtonAndActionsMenu />
      </div>
    </HeaderSection>
    <HeaderSection title={' InCard With Liks'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <InCardWithLiks />
      </div>
    </HeaderSection>
    <HeaderSection title={' Two Columns With Links'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <TwoColumnsWithLinks />
      </div>
    </HeaderSection>
    <HeaderSection title={' Full Width With Links'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <FullWidthWithLinks />
      </div>
    </HeaderSection>
    <HeaderSection title={'Full Width With Constrained Content'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <FullWidthWithConstrainedContent />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <Narrow />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Sticky Headings'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithStickyHeadings />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Actions'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithActions />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Actions'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithTruncatedContent />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Small Avatars'}>
      <div className="border-2  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithSmallAvatars />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Small Avatars On Dark'}>
      <div className="border-2 bg-gray-900  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithSmallAvatarsOnDark />
      </div>
    </HeaderSection>
    <HeaderSection title={'Narrow With Badgeson Dark'}>
      <div className="border-2 bg-gray-900  border-gray-200 rounded-lg sm:px-24 py-3 px-4">
      <NarrowWithBadgesonDark />
      </div>
    </HeaderSection>

    </div>
  );
};

export default StackedList;

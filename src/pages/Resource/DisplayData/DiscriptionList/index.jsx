import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import LeftAligned from './Left-aligned with inline actions'
import LeftAlignedOnDark from './Left-aligned on dark'
import LeftAlignedInCard from './Left-aligned in card'
import LeftAlignedStriped from './Left-aligned striped'
import TwoColumn from './Two-column'
import LeftAlignedAction from './Left-aligned with inline actions'
import NarrowWithHiddenLabels from './Narrow with hidden labels'
import MainHeaderSection from '@shared/components/MainHeader'

const DiscriptionList = () => {
  return (
    <div>
        {/* Header */}
        <MainHeaderSection
        goto={"applicationui"}
        section={"Application Shells"}
        title={"Discription List"}
        tag={"Data Display"}
      />
      {/* Left-aligned */}
      <HeaderSection className={""} title={"Left-aligned"}>
        <div className=" sm:mx-40">
      <LeftAligned />
        </div>
      </HeaderSection>
      {/* Left-aligned on dark */}
      <HeaderSection className={" py-0"} title={"Left-aligned on dark"}>
        <div className=' w-full p-2 rounded-md bg-gray-900'>
        <div className="  sm:mx-40">
      <LeftAlignedOnDark />
        </div>
        </div>
      </HeaderSection>
      {/* Left-aligned in card */}
      <HeaderSection className={""} title={"Left-aligned in card"}>
        <div className=" sm:mx-40">
      <LeftAlignedStriped />
        </div>
      </HeaderSection>
      {/* Two-column */}
      <HeaderSection className={""} title={"Two-column"}>
        <div className=" sm:mx-40">
      <TwoColumn />
        </div>
      </HeaderSection>
      {/* Left-aligned with inline actions */}
      <HeaderSection className={""} title={"Left-aligned with inline actions"}>
        <div className=" sm:mx-40">
      <LeftAlignedAction />
        </div>
      </HeaderSection>
      {/* Narrow with hidden labels */}
      <HeaderSection className={""} title={"Narrow with hidden labels"}>
        <div className=" sm:mx-40">
      <NarrowWithHiddenLabels />
        </div>
      </HeaderSection>
    </div>
  )
}

export default DiscriptionList
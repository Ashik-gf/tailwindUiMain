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

const DiscriptionList = () => {
  return (
    <div>
        {/* Header */}
        <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <Link to={"/resource/appui"}>
          <p className=" flex items-center gap-3 ">
            <IoArrowBackCircle className=" text-3xl" />
            <span>Back</span>{" "}
          </p>
        </Link>
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Description Lists
        </h1>
      </div>
      {/* Left-aligned */}
      <HeaderSection className={""} title={"Left-aligned"}>
        <div className=" mx-40">
      <LeftAligned />
        </div>
      </HeaderSection>
      {/* Left-aligned on dark */}
      <HeaderSection className={" py-0"} title={"Left-aligned on dark"}>
        <div className=' w-full p-2 rounded-md bg-gray-900'>
        <div className="  mx-40">
      <LeftAlignedOnDark />
        </div>
        </div>
      </HeaderSection>
      {/* Left-aligned in card */}
      <HeaderSection className={""} title={"Left-aligned in card"}>
        <div className=" mx-40">
      <LeftAlignedStriped />
        </div>
      </HeaderSection>
      {/* Two-column */}
      <HeaderSection className={""} title={"Two-column"}>
        <div className=" mx-40">
      <TwoColumn />
        </div>
      </HeaderSection>
      {/* Left-aligned with inline actions */}
      <HeaderSection className={""} title={"Left-aligned with inline actions"}>
        <div className=" mx-40">
      <LeftAlignedAction />
        </div>
      </HeaderSection>
      {/* Narrow with hidden labels */}
      <HeaderSection className={""} title={"Narrow with hidden labels"}>
        <div className=" mx-40">
      <NarrowWithHiddenLabels />
        </div>
      </HeaderSection>
    </div>
  )
}

export default DiscriptionList
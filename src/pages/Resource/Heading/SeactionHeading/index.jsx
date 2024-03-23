import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import Simple from './Simple'
import WithDescription from './With description'
import WithActions from './With actions'
import WithAction from './With actions and tabs'
import WithInputGroup from './With input group'
import WithTabs from './With tabs'
import WithActionTabs from './With actions and tabs'
import WithInlineTabs from './With inline tabs'
import WithLabel from './With label'
import WithBadgeAndDropdown from './With badge and dropdown'

const SeactionHeading = () => {
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
          Card Headings
        </h1>
      </div>
      {/* Simple */}
      <HeaderSection className={""} title={"Simple"}>
        <div className=" mx-12">
        <Simple />
        </div>
      </HeaderSection>
      {/* With description */}
      <HeaderSection className={""} title={"With description"}>
        <div className=" mx-12 ">
        <WithDescription />
        </div>
      </HeaderSection>
      {/* With Actions */}
      <HeaderSection className={""} title={"With Acrtons"}>
        <div className="  mx-12">
        <WithActions />
        </div>
      </HeaderSection>
      {/* With action */}
      <HeaderSection className={""} title={"With Action"}>
        <div className="  mx-12">
        <WithAction />
        </div>
      </HeaderSection>
      {/* With input group */}
      <HeaderSection className={""} title={"With input group"}>
        <div className="  mx-12">
        <WithInputGroup />
        </div>
      </HeaderSection>
      {/* With tabs */}
      <HeaderSection className={""} title={"With tabs"}>
        <div className="  mx-12">
        <WithTabs />
        </div>
      </HeaderSection>
      {/* With actions and tabs */}
      <HeaderSection className={""} title={"With actions and tabs"}>
        <div className="  mx-12">
        <WithActionTabs />
        </div>
      </HeaderSection>
      {/* With inline tabs */}
      <HeaderSection className={""} title={"With inline tabs"}>
        <div className="  mx-12">
        <WithInlineTabs />
        </div>
      </HeaderSection>
      {/* With label */}
      <HeaderSection className={""} title={"With label"}>
        <div className="  mx-12">
        <WithLabel />
        </div>
      </HeaderSection>
      {/* With badge and dropdown */}
      <HeaderSection className={""} title={"With badge and dropdown"}>
        <div className="  mx-12">
        <WithBadgeAndDropdown />
        </div>
      </HeaderSection>
    </div>
  )
}

export default SeactionHeading
import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import Simple from './Simple'
import WithAction from './With action'
import WithAvatarAndActions from './With avatar and actions'
import WithDescriptionAndAction from './With description and action'
import WithDescription from './With description'
import WithAvatarMetaAndDropdown from './With avatar, meta, and dropdown'

const CardHeading = () => {
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
        <div className="  border-gray-400">
          <Simple />
        </div>
      </HeaderSection>
      {/* With action */}
      <HeaderSection className={""} title={"with Action"}>
        <div className="  border-gray-400">
          <WithAction />
        </div>
      </HeaderSection>
      {/* With avatar and actions*/}
      <HeaderSection className={""} title={"With avatar and actions"}>
        <div className="  border-gray-400">
          <WithAvatarAndActions />
        </div>
      </HeaderSection>
      {/* With description and action*/}
      <HeaderSection className={""} title={"With description and action"}>
        <div className="  border-gray-400">
          <WithDescriptionAndAction />
        </div>
      </HeaderSection>
      {/* With description*/}
      <HeaderSection className={""} title={"With Description"}>
        <div className="  border-gray-400">
          <WithDescription />
        </div>
      </HeaderSection>
      {/* With avatar, meta, and dropdown*/}
      <HeaderSection className={""} title={"With avatar, meta, and dropdown"}>
        <div className="  border-gray-400">
          <WithAvatarMetaAndDropdown />
        </div>
      </HeaderSection>
    </div>
  )
}

export default CardHeading
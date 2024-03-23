import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import ContactCardsWithSmallPortraits from './Contact cards with small portraits'
import ContactCards from './Contact cards'
import SimpleCards from './Simple cards'
import HorizontalLinkCards from './Horizontal link cards'
import ActionsWithSharedBorders from './Actions with shared borders'
import ImagesWithDetails from './Images with details'
import LogosCardsWithDescriptionList from './Logos cards with description list'

const Grids = () => {
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
          Tables
        </h1>
      </div>
      {/* Contact cards with small portraits */}
      <div className="div">
        <HeaderSection title={"Contact cards with small portraits"}>
          <ContactCardsWithSmallPortraits />
        </HeaderSection>
      </div>
      {/* Contact cards*/}
      <div className="div">
        <HeaderSection title={"Contact cards"}>
          <ContactCards />
        </HeaderSection>
      </div>
      {/* Contact cards*/}
      <div className="div">
        <HeaderSection title={"Contact cards"}>
          <ContactCards />
        </HeaderSection>
      </div>
      {/* Simple cards*/}
      <div className="div">
        <HeaderSection title={"Simple cards"}>
          <SimpleCards />
        </HeaderSection>
      </div>
      {/* Horizontal link cards*/}
      <div className="div">
        <HeaderSection title={"Horizontal link cards"}>
          <HorizontalLinkCards />
        </HeaderSection>
      </div>
      {/*Actions with shared borders*/}
      <div className="div">
        <HeaderSection title={"Actions with shared borders"}>
          <ActionsWithSharedBorders />
        </HeaderSection>
      </div>
      {/*Images with details*/}
      <div className="div">
        <HeaderSection title={"Images with details"}>
          <ImagesWithDetails />
        </HeaderSection>
      </div>
      {/*Logos cards with description list*/}
      <div className="div">
        <HeaderSection title={"Logos cards with description list"}>
          <LogosCardsWithDescriptionList />
        </HeaderSection>
      </div>
    </div>
  )
}

export default Grids
import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithTrending from './With trending'
import SimpleOnDark from './Simple on dark'
import SimpleInCards from './Simple in cards'
import WithBrandIcon from './With brand icon'
import WithSharedBorders from './With shared borders'
import MainHeaderSection from '@shared/components/MainHeader'

const Stats = () => {
  return (
    <div>
     
      <MainHeaderSection goto={'appui'} section={'Application UI'}  title={'Stats'} tag={'Data Display'} >

      </MainHeaderSection>
      {/* With Trending */}
      <HeaderSection className={""} title={"With Trending"}>
        <div className=" sm:mx-20">
        <WithTrending />
        </div>
      </HeaderSection>
      {/* Simple on dark */}
      <HeaderSection className={""} title={"Simple on dark"}>
        <div className=" sm:mx-20">
        <SimpleOnDark />
        </div>
      </HeaderSection>
      {/* Simple in cards */}
      <HeaderSection className={""} title={"Simple in cards"}>
        <div className=" sm:mx-20">
        <SimpleInCards />
        </div>
      </HeaderSection>
      {/* With brand icon */}
      <HeaderSection className={""} title={"With brand icon"}>
        <div className=" sm:mx-20">
        <WithBrandIcon />
        </div>
      </HeaderSection>
      {/* With shared borders */}
      <HeaderSection className={""} title={"With shared borders"}>
        <div className=" sm:mx-20">
        <WithSharedBorders />
        </div>
      </HeaderSection>
    </div>
  )
}

export default Stats
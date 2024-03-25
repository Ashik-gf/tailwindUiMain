import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import Simple from './Simple'
import Panels from './Panels'
import Bullets from './Bullets'
import PanelsWithBorder from './Panels with border'
import Circles from './Circles'
import BulletsAndText from './Bullets and text'
import CirclesWithText from './Circles with text'
import ProgressBar from './Progress bar'

const Steps = () => {
  return (
    <div>
        <MainHeaderSection goto={'appui'} section={'Application UI'} title={'Steps'}  tag={"Nevigation"}/>

        <HeaderSection title={'Simple'}>
    <div className=" m-4">
        <Simple />
    </div>
        </HeaderSection>
        {/* Panels */}
        <HeaderSection title={'Panels'}>
    <div className=" m-4">
        <Panels />
    </div>
        </HeaderSection>
        {/* Bullets */}
        <HeaderSection title={'Bullets'}>
    <div className=" m-4">
        <Bullets />
    </div>
        </HeaderSection>
        {/* Panels with border */}
        <HeaderSection title={'Panels with border'}>
    <div className=" m-4">
        <PanelsWithBorder />
    </div>
        </HeaderSection>
        {/* Circles */}
        <HeaderSection title={'Circles'}>
    <div className=" m-4">
        <Circles />
    </div>
        </HeaderSection>
        {/* Bullets and text */}
        <HeaderSection title={'Bullets and text'}>
    <div className=" m-4">
        <BulletsAndText />
    </div>
        </HeaderSection>
        {/* Circles with text */}
        <HeaderSection title={'Circles with text'}>
    <div className=" m-4">
        <CirclesWithText />
    </div>
        </HeaderSection>
        {/* Progress bar */}
        <HeaderSection title={'Progress bar'}>
    <div className=" m-4">
        <ProgressBar />
    </div>
        </HeaderSection>
    </div>
  )
}

export default Steps
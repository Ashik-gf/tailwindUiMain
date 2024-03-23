import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import SimpleWithHeading from './Simple with heading'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleWithHeadingOnDark from './Simple with heading on dark'
import SimpleWithCallToAction from './Simple with call-to-action'
import SimpleActionOnDark from './Simple with call-to-action on dark'
import SimpleLeftAligned from './Simple left-aligned'
import SimpleLeftAlignedDark from './Simple left-aligned on dark'
import SplitWithLogosonRight from './Split with logos on right'
import SplitWithLogosonRightOnDark from './Split with logos on right on dark'
import Simple from './Simple'
import SimpleOnDark from './Simple on dark'
import Grid from './Grid'
import GridOnDark from './Grid on dark'

const LogoClouds = () => {
  return (
    <div>
      <MainHeaderSection title={'Logo Clouds'} tag={'Page Section'}/>
      <FirstHeaderSection title={'Simple With Heading'}>
        <div className="border-2 border-gray-100 rounded-lg">
      <SimpleWithHeading />
        </div>
      </FirstHeaderSection>
      {/* Simple with heading on dark */}
    <HeaderSection title={'Simple with heading on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleWithHeadingOnDark />
        </div>
    </HeaderSection>
      {/* Simple with call-to-action */}
    <HeaderSection title={'Simple with call-to-action'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleWithCallToAction />
        </div>
    </HeaderSection>
      {/* Simple with call-to-action on dark */}
    <HeaderSection title={'Simple with call-to-action on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleActionOnDark />
        </div>
    </HeaderSection>
      {/* Simple left-aligned */}
    <HeaderSection title={'Simple left-aligned'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleLeftAligned />
        </div>
    </HeaderSection>
      {/* Simple left-aligned on dark*/}
    <HeaderSection title={'Simple left-aligned on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleLeftAlignedDark />
        </div>
    </HeaderSection>
      {/*Split with logos on right*/}
    <HeaderSection title={'Split with logos on right'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SplitWithLogosonRight />
        </div>
    </HeaderSection>
      {/*Split with logos on right on dark*/}
    <HeaderSection title={'Split with logos on right on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SplitWithLogosonRightOnDark />
        </div>
    </HeaderSection>
      {/*Simple*/}
    <HeaderSection title={'Simple'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <Simple />
        </div>
    </HeaderSection>
      {/*Simple on dark*/}
    <HeaderSection title={'Simple on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <SimpleOnDark />
        </div>
    </HeaderSection>
      {/*Grid*/}
    <HeaderSection title={'Grid'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <Grid />
        </div>
    </HeaderSection>
      {/*Grid on dark*/}
    <HeaderSection title={'Grid on dark'}>
    <div className="border-2 border-gray-100 rounded-lg">
      <GridOnDark />
        </div>
    </HeaderSection>



    </div>
  )
}

export default LogoClouds
import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import SideBySideWithDetails from './Side-by-side with details'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SimpleSideBySide from './Simple side-by-side'
import SimpleSideBySideOnDark from './Simple side-by-side on dark'
import SimpleSide_by_sideonBrand from './Simple side-by-side on brand'
import SimpleStacked from './Simple stacked'
import CenteredCard from './Centered card'
import Sid_by_sideOnCard from './Side-by-side on card'

const NewsletterSections = () => {
  return (
    <div>
      <MainHeaderSection title={'Newsletter Sections'} tag={'Page Section'} />
      <FirstHeaderSection title={'Side-by-side with details'}>
      <div className="mx-1">
        <SideBySideWithDetails />
      </div>
      </FirstHeaderSection>
      {/* Simple side-by-side */}
      <HeaderSection title={'Simple side-by-side'}>
<SimpleSideBySide />
      </HeaderSection>
      {/* Simple side-by-side on dark */}
      <HeaderSection title={'Simple side-by-side on dark'}>
<SimpleSideBySideOnDark />
      </HeaderSection>
      {/* Simple side-by-side on brand */}
      <HeaderSection title={'Simple side-by-side on brand'}>
<SimpleSide_by_sideonBrand />
      </HeaderSection>
      {/* Simple stacked */}
      <HeaderSection title={'Simple stacked'}>
<SimpleStacked />
      </HeaderSection>
      {/* Centered card */}
      <HeaderSection title={'Centered card'}>
<CenteredCard />
      </HeaderSection>
      {/* Side-by-side on card */}
      <HeaderSection title={'Side-by-side on card'}>
<Sid_by_sideOnCard />
      </HeaderSection>
    </div>
  )
}

export default NewsletterSections
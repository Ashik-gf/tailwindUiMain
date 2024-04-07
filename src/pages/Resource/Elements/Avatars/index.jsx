import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import AvatarGroupStackedBottomToTop from './Avatar group stacked bottom to top'
import CircularAvatars from './Circular avatars'
import RoundedAvatars from './Rounded avatars'
import CircularAvatarsWithTopNotification from './Circular avatars with top notification'
import CircularAvatarsWithBottomNotification from './Circular avatars with bottom notification/indedx'
import RoundedAvatarsWithBottomNotification from './Rounded avatars with bottom notification'
import CircularAvatarsWithPlaceholderIcon from './Circular avatars with placeholder icon'
import CircularAvatarsWithPlaceholderInitials from './Circular avatars with placeholder initials'
import AvatarGroupStackedTopToBottom from './Avatar group stacked top to bottom'
import WithText from './With text'

const Avatars = () => {
  return (
    <div>
      <MainHeaderSection
       goto={'appui'} 
       section={'Application UI'} 
       tag={'Elements'} 
       title={'Avatars'}
       
       />
      <FirstHeaderSection title={'Avatar group stacked bottom to top'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10 px-8'>
        <AvatarGroupStackedBottomToTop />
      </div>
      </FirstHeaderSection>
      {/* Circular avatars */}
      <HeaderSection title={'Circular avatars'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <CircularAvatars />
      </div>
      </HeaderSection>
      {/* Rounded avatars */}
      <HeaderSection title={'Rounded avatars'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <RoundedAvatars />
      </div>
      </HeaderSection>
      {/* Circular avatars with top notification */}
      <HeaderSection title={'Circular avatars with top notification'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <CircularAvatarsWithTopNotification />
      </div>
      </HeaderSection>
      {/* Circular avatars with bottom notification */}
      <HeaderSection title={'Circular avatars with bottom notification'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <CircularAvatarsWithBottomNotification />
      </div>
      </HeaderSection>
      {/* Rounded avatars with bottom notification */}
      <HeaderSection title={'Rounded avatars with bottom notification'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <RoundedAvatarsWithBottomNotification />
      </div>
      </HeaderSection>
      {/* Circular avatars with placeholder icon */}
      <HeaderSection title={'Circular avatars with placeholder icon'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <CircularAvatarsWithPlaceholderIcon />
      </div>
      </HeaderSection>
      {/* Circular avatars with placeholder initials */}
      <HeaderSection title={'Circular avatars with placeholder initials'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <CircularAvatarsWithPlaceholderInitials />
      </div>
      </HeaderSection>
      {/* Avatar group stacked top to bottom */}
      <HeaderSection title={'Avatar group stacked top to bottom'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <AvatarGroupStackedTopToBottom />
      </div>
      </HeaderSection>
      {/* With text*/}
      <HeaderSection title={'With text'}>
      <div className=' border-2 border-gray-200 rounded-lg py-10'>
        <WithText />
      </div>
      </HeaderSection>

    </div>
  )
}

export default Avatars
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import InputWithInlineLeadingAddonAndTrailingDropdown from './Input with inline leading add-on and trailing dropdown'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import InputWithLable from './Input with label'
import InputWithLabelAndHelpText from './Input with label and help text'
import InputWithValidationError from './Input with validation error'
import InputWithDisabledState from './Input with disabled state'
import InputWithHiddenLabel from './Input with hidden label'
import InputWithLeadingIcon from './Input with leading icon'
import InputWithTrailingIcon from './Input with trailing icon'
import InputWithAddOn from './Input with add-on'
import InputWithInlineAddOn from './Input with inline add-on'
import InputWithInlineLeadingAndTrailingAddOns from './Input with inline leading and trailing add-ons'
import InputWithInlineLeadingDropdown from './Input with inline leading dropdown'
import InputWithLeadingIconAndTrailingButton from './Input with leading icon and trailing button'
import InputWithInsetLabel from './Input with inset label'
import InputsWithInsetLabelsAndSharedBorders from './Inputs with inset labels and shared borders'
import InputWithOverlappingLabel from './Input with overlapping label'
import InputWithPillShape from './Input with pill shape'
import InputWithGrayBackgroundAndBottomBorder from './Input with gray background and bottom border'
import InputWithKeyboardShortcut from './Input with keyboard shortcut'
import InputsWithSharedBorders from './Inputs with shared borders'
import InputWithCornerHint from './Input with corner hint'

const InputGroups = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'Froms'} title={'Input Groups'}></MainHeaderSection>
      <FirstHeaderSection title={'Input with inline leading add-on and trailing dropdown'} className={'border-2 border-gray-200 py-10 rounded-lg'} >
        <div className=' px-12 md:px-[200px] lg:px-[400px] '>
           <InputWithInlineLeadingAddonAndTrailingDropdown />
        </div>
       
      </FirstHeaderSection>
      {/* Input with label */}
      <HeaderSection title={'Input with label'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithLable />
</div>
      </HeaderSection>
      {/* Input with label and help text */}
      <HeaderSection title={'Input with label and help text'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithLabelAndHelpText />
</div>
      </HeaderSection>
      {/* Input with validation error */}
      <HeaderSection title={'Input with validation error'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithValidationError />
</div>
      </HeaderSection>
      {/* Input with disabled state */}
      <HeaderSection title={'Input with disabled state'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithDisabledState />
</div>
      </HeaderSection>
      {/* Input with hidden label */}
      <HeaderSection title={'Input with hidden label'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithHiddenLabel />
</div>
      </HeaderSection>
      {/* Input with corner hint */}
      <HeaderSection title={'Input with corner hint'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithCornerHint />
</div>
      </HeaderSection>
      {/* Input with leading icon */}
      <HeaderSection title={'Input with leading icon'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithLeadingIcon />
</div>
      </HeaderSection>
      {/* Input with trailing icon */}
      <HeaderSection title={'Input with trailing icon'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithTrailingIcon />
</div>
      </HeaderSection>
      {/* Input with add-on */}
      <HeaderSection title={'Input with add-on'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithAddOn />
</div>
      </HeaderSection>
      {/* Input with inline add-on */}
      <HeaderSection title={'Input with inline add-on'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithInlineAddOn />
</div>
      </HeaderSection>
      {/* Input with inline leading and trailing add-ons */}
      <HeaderSection title={'Input with inline leading and trailing add-ons'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithInlineLeadingAndTrailingAddOns />
</div>
      </HeaderSection>
      {/* Input with inline leading dropdown */}
      <HeaderSection title={'Input with inline leading dropdown'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithInlineLeadingDropdown />
</div>
      </HeaderSection>
      {/* Input with leading icon and trailing button*/}
      <HeaderSection title={'Input with leading icon and trailing button'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithLeadingIconAndTrailingButton />
</div>
      </HeaderSection>
      {/* Inputs with shared borders*/}
      <HeaderSection title={'Inputs with shared borders'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputsWithSharedBorders />
</div>
      </HeaderSection>
      {/* Input with inset label*/}
      <HeaderSection title={'Input with inset label'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithInsetLabel />
</div>
      </HeaderSection>
      {/* Inputs with inset labels and shared borders*/}
      <HeaderSection title={'Inputs with inset labels and shared borders'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputsWithInsetLabelsAndSharedBorders />
</div>
      </HeaderSection>
      {/* Input with overlapping label*/}
      <HeaderSection title={'Input with overlapping label'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithOverlappingLabel />
</div>
      </HeaderSection>
      {/* Input with pill shape*/}
      <HeaderSection title={'Input with pill shape'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithPillShape />
</div>
      </HeaderSection>
      {/* Input with gray background and bottom border*/}
      <HeaderSection title={'Input with gray background and bottom border'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithGrayBackgroundAndBottomBorder />
</div>
      </HeaderSection>
      {/* Input with keyboard shortcut*/}
      <HeaderSection title={'Input with keyboard shortcut'}>
<div className='px-12 md:px-[200px] lg:px-[400px] border-2 border-gray-200 py-10 rounded-lg'>
<InputWithKeyboardShortcut />
</div>
      </HeaderSection>





    </div>
  )
}

export default InputGroups
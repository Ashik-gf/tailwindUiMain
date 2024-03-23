import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { MdOutlineDone } from 'react-icons/md'

export default function CenteredWithWideButtons() {
  const [open, setOpen] = useState(true)


  return (
<div className=' h-[400px] w-full bg-gray-500 py-14 '>
  <div className=' w-[300px] md:w-[500px] h-[300px] md:h-[260px] mx-auto  rounded-lg
  bg-white pt-8
  '>
<div className=' text-center mx-auto '>
<div className=' flex justify-center w-full '>
<MdOutlineDone className=' text-green-500 bg-green-200 rounded-full p-2 text-5xl' />
</div>
<p className=' text-xl font-semibold'>Payment successful</p>
<p className=' mx-12 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
<div className=' flex justify-center items-center gap-8'>
<button className='w-[80px]  p-2 rounded-lg  ring-2 ring-indigo-600 hover:bg-indigo-600 hover:text-white text-black  hover:ring-2 hover:ring-indigo-800'>
Cancel
</button>
<button className=' w-[80px] p-2 rounded-lg text-white bg-indigo-600 hover:ring-2 hover:ring-indigo-800' >
Deactive
</button>
</div>
</div>
  </div>
 </div>
  )
}

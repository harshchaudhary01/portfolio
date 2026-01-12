import React from 'react'
import CalBooking from '../components/CalBooking'

const MeetingBooking = () => {
  return (
    <div className='mx-auto w-158 h-50 flex gap-3 flex-col items-center justify-center border border-dashed border-gray-500 rounded-md mt-15'>
      <h1 className='text-[#828282] font-semibold text-xl'>Hey, you scrolled this far, let's talk.</h1>
      <div className='flex items-center button'>
        <img className='w-4 h-4 rounded-full' src="src\assets\profile_picture.png" alt="" />
        <CalBooking text={"Book a Free Call"} />
      </div>
    </div>
  )
}

export default MeetingBooking

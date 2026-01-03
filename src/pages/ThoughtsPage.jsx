import React from 'react'
import CornerBorder from '../components/CornerBorder'

const ThoughtsPage = () => {
  return (
    <div className='px-5 mt-8'>
      <CornerBorder title={"Thoughts in words."} />
      <div className='mt-2 p-5 border border-dashed border-gray-500 rounded-md'>
        <p><span className='text-2xl'>"</span>I believe the best software is built with logic, empathy, and a little imagination.<span className='text-2xl'>"</span></p>
      </div>
    </div>
  )
}

export default ThoughtsPage

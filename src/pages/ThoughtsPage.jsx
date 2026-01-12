import React from 'react'
import CornerBorder from '../components/CornerBorder'

const ThoughtsPage = () => {
  return (
    <div className='px-5 mt-2'>
      <CornerBorder title={"Thoughts in words."} />
      <div className='mt-2 p-5 border border-dashed border-gray-500 rounded-md'>
        <p className='tooltip text-[#828282] font-bold left-60'>
          अनुगच्छतु प्रवाहः
          <span className="tooltip-text">
            A Sanskrit phrase meaning “let the flow continue,” symbolizing adaptability and continuous progress.
          </span>
        </p>
      </div>
    </div>
  )
}

export default ThoughtsPage

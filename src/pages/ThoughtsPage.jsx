import React from 'react'
import CornerBorder from '../components/CornerBorder'

const ThoughtsPage = () => {
  return (
    <div className='px-5 mt-2'>
      <CornerBorder title={"Thoughts in words."} />
      <div className='px-4 py-10 mt-2 p-5 border border-dashed border-gray-500 rounded-md'>
        <p className='tooltip text-[#828282] text-xl font-bold left-57'>
          अनुगच्छतु प्रवाहः
          <span className="tooltip-text text-sm font-light">
            A Sanskrit phrase meaning “let the flow continue”, symbolizing adaptability and continuous progress.
          </span>
        </p>
      </div>
    </div>
  )
}

export default ThoughtsPage

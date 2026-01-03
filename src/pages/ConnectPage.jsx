import React from 'react'
import CornerBorder from '../components/CornerBorder'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const ConnectPage = () => {
  return (
      <div className='px-5 mt-8 text-center'>
      <div className='mt-2 p-5 border border-dashed border-gray-500 rounded-md text-center'>
        <h1 className='text-2xl font-medium'>Let's Connect</h1>
        <p className='mt-1 text-sm'>Feel free to reach out through any of these platforms</p>
        <div className='flex justify-evenly px-25 gap-3 mt-3'>
            <button className='button'>
                <SiLeetcode />
                <p>Leetcode</p>
            </button>
            <button className='button'>
                <FaGithub />
                <p>Github</p>
            </button>
            <button className='button'>
                <FaFileDownload />
                <p>Resume</p>
            </button>
            <button className='button'>
                <ImLinkedin />
                <p>LinkedIn</p>
            </button>
        </div>
      </div>

      <div className='mt-17'>
        <p><i>"Nothing Is Perfect – But You Can Make It Better."</i></p>
        <p className='mt-5 text-sm'>Designed & Made with ❤️</p>
      </div>

      <div className='flex items-center justify-between mt-5 px-3'>
        <p>2025. All rights reserved</p>
        <p>Views #5531</p>
      </div>
    </div>
  )
}

export default ConnectPage

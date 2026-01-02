import React from 'react'
import { IoLockOpenOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <div className='flex gap-3 mt-5 p-3 border border-dashed border-gray-500 rounded-md' >
      <div className='bg-blue-400 rounded h-40 w-1/2'>
      
      </div>
      <div className='flex items-start justify-between w-1/2'>
            <div className='flex items-center justify-between gap-3'>
                <p className='font-bold'>Ossium</p>
                <IoLockOpenOutline />
            </div>
            <div className='flex items-center justify-between gap-5'>
                <button className='flex items-center justify-between gap-1 px-2 py-1 border border-dashed border-gray-500 rounded-md bg-[#2F2F2F] text-white text-xs' >
                    <FaExternalLinkAlt />
                    <p>Live</p>
                </button>
                <button className='flex items-center justify-between gap-1 px-2 py-1 border border-dashed border-gray-500 rounded-md bg-[#2F2F2F] text-white text-xs' >
                    <FaGithub />
                    <p>Github</p>
                </button>
            </div>
        </div>
      </div>
  )
}

export default ProjectCard

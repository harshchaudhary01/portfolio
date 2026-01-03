import React from 'react'
import { IoLockOpenOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({imgurl, title}) => {
  return (
    <div className='flex gap-3 mt-5 p-5 border border-dashed border-gray-500 rounded-md' >
      <div className='rounded-sm overflow-hidden w-1/2'>
        <img src={imgurl} alt="" />
      </div>
      <div className='flex items-start justify-between w-1/2'>
            <div className='flex items-center justify-between gap-3'>
                <p className='font-bold'>{title}</p>
                <IoLockOpenOutline />
            </div>
            <div className='flex items-center justify-between gap-2'>
                <button className='button inline-flex items-center' >
                    <FaExternalLinkAlt />
                    <p>Live</p>
                </button>
                <button className='button inline-flex items-center' >
                    <FaGithub />
                    <p>Github</p>
                </button>
            </div>
        </div>
      </div>
  )
}

export default ProjectCard

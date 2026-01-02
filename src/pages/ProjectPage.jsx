import React from 'react'
import CornerBorder from '../components/CornerBorder'
import ProjectCard from '../components/ProjectCard'
import { FaArrowRight } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className='px-5 relative'>
      <CornerBorder title={"Things I've Built"} />
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <button className='flex items-center gap-2 mt-3 absolute right-8 px-2 py-1 border border-dashed border-gray-500 rounded-md bg-[#2F2F2F] text-white text-xs '>
            <p>More Projects</p>
            <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProjectPage

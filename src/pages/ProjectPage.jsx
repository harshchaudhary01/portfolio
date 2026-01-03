import React from 'react'
import CornerBorder from '../components/CornerBorder'
import ProjectCard from '../components/ProjectCard'
import { FaArrowRight } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className='px-5 relative'>
      <CornerBorder title={"Things I've Built"} />
      <div>
        <ProjectCard imgurl={"src\\assets\\codestreak_img.png"} title={"CodeStreak"} />
        <ProjectCard imgurl={"src\\assets\\taskmanager_img.png"} title={"Task Manager"} />
        <button className='button flex items-center gap-2 mt-3 absolute right-8 '>
            <p>More Projects</p>
            <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProjectPage

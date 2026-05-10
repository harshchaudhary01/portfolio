import React from 'react'
import CornerBorder from '../components/CornerBorder'
import ProjectCard from '../components/ProjectCard'
import { FaArrowRight } from "react-icons/fa";
import codestreakImg from '../assets/codestreak_img.png';
import taskmanagerImg from '../assets/taskmanager_img.png';

const ProjectPage = () => {
  return (
    <div className='px-5 relative'>
      <CornerBorder title={"Things I've Built"} />
      <div>
        <ProjectCard imgurl={codestreakImg} title={"CodeStreak"} description={"A scalable SaaS platform delivering cloud-based tools that streamline workflows, enhance collaboration, automate operations, and provide real-time insights, helping businesses improve efficiency, accelerate growth, and adapt quickly in competitive markets."}/>
        <ProjectCard imgurl={taskmanagerImg} title={"Task Manager"} description={"A scalable SaaS platform delivering cloud-based tools that streamline workflows, enhance collaboration, automate operations, and provide real-time insights, helping businesses improve efficiency, accelerate growth, and adapt quickly in competitive markets."} />
        <button className='button flex items-center gap-2 mt-3 absolute right-8 '>
            <p>More Projects</p>
            <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProjectPage

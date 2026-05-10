import React from 'react'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ThoughtsPage from './pages/ThoughtsPage'
import ConnectPage from './pages/ConnectPage'
import GithubContribution from './components/GithubContribution'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import MeetingBooking from './pages/MeetingBooking'
import SkillCarousel from './components/SkillCarousel'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0B0D0E] text-zinc-50'>
      <div className='mx-auto max-w-2xl py-12'>
        <HomePage />
        <div className="relative overflow-hidden px-0">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[#0B0D0E] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#0B0D0E] to-transparent z-10" />
          <SkillCarousel />
        </div>
        <GithubContribution />
        <ProjectPage />
        <ThoughtsPage />
        {/* <MeetingBooking /> */}
        <ConnectPage />
      </div>
    </div>
  )
}


export default App

import React from 'react'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ThoughtsPage from './pages/ThoughtsPage'
import ConnectPage from './pages/ConnectPage'
import GithubContribution from './components/GithubContribution'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const App = () => {
  return (
    <div className='min-h-screen bg-[#0B0D0E] text-zinc-50'>
      <div className='mx-auto max-w-2xl py-12'>
        <HomePage />
        <GithubContribution />
        <ProjectPage />
        <ThoughtsPage />
        <ConnectPage />
      </div>
    </div>
  )
}


export default App

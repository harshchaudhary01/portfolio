import React from 'react'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0B0D0E] text-zinc-50'>
      <div className='mx-auto max-w-2xl py-12'>
        <HomePage />
        <ProjectPage />
      </div>
    </div>
  )
}


export default App

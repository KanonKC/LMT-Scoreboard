import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Scoreboard from './Scoreboard'

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Scoreboard/>}/>
    </Routes>
  )
}

export default Views
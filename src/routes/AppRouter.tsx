import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CharacterPage } from '../pages/CharacterPage'
import { HomePage } from '../pages/HomePage/HomePage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:id' element={<CharacterPage />} />
    </Routes>
  )
}

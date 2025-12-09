import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Principal from './Principal'
import Decoracion from './Decoracion'
import Musica from './Musica'
import Historia from './Historia'
import Comida from './Comida'

function App() {
    return (
    <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='decoracion' element={<Decoracion></Decoracion>} ></Route>
        <Route path='musica' element={<Musica></Musica>} ></Route>
        <Route path='historia' element={<Historia></Historia>} ></Route>
        <Route path='comida' element={<Comida></Comida>} ></Route>
    </Routes>
  )
}

export default App

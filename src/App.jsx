import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pokedex from './components/Pokedex/Pokedex'
import Home from './components/Home/Home'
import Error from './components/Home/Error'
import {Generations , GenerationsID} from './components/Generations/Generations'
import Context from './Context/Context'
import Types from './components/Types/Types'
import TypesSel from './components/Types/TypesSel'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='pokedex/:id' element={<Pokedex/>}/>
      <Route path='generations' element={<Generations/>}/>
      <Route path='generations/:id' element={<GenerationsID/>}/>
      <Route path='types' element={<Types/>}/>
      <Route path='types/:type' element={<TypesSel/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App

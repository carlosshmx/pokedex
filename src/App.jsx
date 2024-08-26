import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pokedex from './components/Pokedex/Pokedex'
import Home from './components/Home/Home'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='pokedex' element={<Pokedex/>}/>
      <Route path='*' element={<h1>Error 404</h1>}/>
    </Routes>
    </>
  )
}

export default App

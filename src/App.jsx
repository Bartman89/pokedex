import {React,useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Buscador from './components/Buscador'
import Pokemones  from './components/Pokemones'

import {VariableProvider}from './context/VariableBusqueda'





function App() {




  return (
    <VariableProvider>
      

    <Navbar></Navbar>
    <Buscador></Buscador>
    
    <Pokemones></Pokemones>
    

    
    
    </VariableProvider>
    
  )
}

export default App
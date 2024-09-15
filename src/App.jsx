import {React,useState, useEffect} from 'react'
import "./App.css"



function App() {

const[pokemones,setPokemones]=useState([])

useEffect( ()=>{

    const appGet = async ()=>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    const data = await response.json()

    const {results}= data

    const datosPokemon = results.map(async (pokemon)=>{
        const otherResponse = await fetch(pokemon.url)
        const otherData =await otherResponse.json()
        return ({
            id:otherData.id,
            name:otherData.name,
            img:otherData.sprites.other.dream_world.front_default
        })
    })

    setPokemones(await Promise.all(datosPokemon))

    }

    appGet()
    

},[])

  return (
    <div>
        {pokemones.map((pokemon)=>{
             return (
                <div key={pokemon.id}> 
                <img src={pokemon.img} alt={pokemon.name} />
                <p>{pokemon.name}</p>
                <span>{pokemon.id}</span>
                </div>
             )
                
                
            
        })}
    </div>
  )
}

export default App
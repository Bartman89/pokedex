import {useEffect, useState} from 'react'

function usePokemones (total){


    
    const URL=`https://pokeapi.co/api/v2/pokemon?limit=${total}&offset=0`
    
    


    const[pokemones,setPokemones]=useState([])

    const[verMas, setVerMas]=useState(true)

    
    

        useEffect( ()=>{

            const appGet = async ()=>{
                const response = await fetch(URL)
            const data = await response.json()
            
            
            

            

        
            const {results, next}= data
            
            next === null && setVerMas(false)    
            
        
            const datosPokemon = results.map(async (pokemon)=>{
                const otherResponse = await fetch(pokemon.url)
                const otherData =await otherResponse.json()
                return (
                      {
                    id:otherData.id,
                    nombre:otherData.name,
                    imagen:otherData.sprites.other.dream_world.front_default  || otherData.sprites.front_default
                })
            })
        
            setPokemones(await Promise.all(datosPokemon))
            
            
            
        //    console.log( `siguientes:${siguientes}`)
        
            }
        
            appGet()
            
            
        
        },[URL])

        return {pokemones, verMas}
   
}

export default usePokemones
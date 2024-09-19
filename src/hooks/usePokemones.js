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
            
        
            const datosPokemon = await Promise.all(results.map(async (pokemon)=>{
                const otherResponse = await fetch(pokemon.url)
                const otherData =await otherResponse.json()

                const abilities = otherData.abilities.map(a=>a.ability.name)

                const stats = otherData.stats.map(s=>{return({name:s.stat.name, base:s.base_stat})})

                const types = otherData.types.map(t=>t.type.name)

                return (
                      {
                    id:otherData.id,
                    nombre:otherData.name,
                    imagen:otherData.sprites.other.dream_world.front_default  || otherData.sprites.front_default,
                    abilities,
                    stats,
                    types
                })
            })
            )
            setPokemones(datosPokemon)
            
            
            
        //    console.log( `siguientes:${siguientes}`)
        
            }
        
            appGet()
            
            
        
        },[URL])

        return {pokemones, verMas}
   
}

export default usePokemones
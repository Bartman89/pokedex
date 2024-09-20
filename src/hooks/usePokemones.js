import {useEffect, useState, useContext} from 'react'
import { VariableBusqueda } from "../context/VariableBusqueda"

function usePokemones (total){

   
    const {variable, busquedaIndividual, verMas} =useContext(VariableBusqueda)

    
   
    let URL = ""

    

    if (busquedaIndividual === 1){
    
        URL=`https://pokeapi.co/api/v2/pokemon/${variable}`


    }
    

    else { if(busquedaIndividual === null){   URL=`https://pokeapi.co/api/v2/pokemon?limit=${total}&offset=0`}}
     
     
     
    
    


    const[pokemones,setPokemones]=useState([])

    

    
    

        useEffect( ()=>{
            
            if(busquedaIndividual === 1){
            
            const appGet = async ()=>{
        
            const response = await fetch(URL)
            const data = await response.json()
               
            const abilities = data.abilities.map(a=>a.ability.name)

            const stats = data.stats.map(s=>{return({name:s.stat.name, base:s.base_stat})})

            const types = data.types.map(t=>t.type.name)

            
                return (
                     {
                    id:data.id,
                    nombre:data.name,
                    imagen:data.sprites.other.dream_world.front_default  || data.sprites.front_default,
                    abilities,
                    stats,
                    types
        
                }
        
                
         
            )    
            
        }
        
        appGet().then(response=>{
            setPokemones([response])
            //setVerMas(false)
            
        })
    }

        
        
        
            

            else {if(busquedaIndividual === null){

            const appGet = async ()=>{
            const response = await fetch(URL)
            const data = await response.json()
                    
            const {results, next}= data
            
            //next === null && setVerMas(true)    
            
        
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
            
        }
    }
        },[URL])

        

        return {pokemones, verMas}
        
 
}

export default usePokemones
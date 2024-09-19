
import { useState } from "react"
import usePokemones from "../hooks/usePokemones"
import "./pokemones.css"





const Pokemon = ({id, imagen, nombre})=>{
    return(
        
       
               <div key={id} className='pokemon-card'> 
               <img src={imagen} alt={nombre} className='pokemon-imagen' />
               <p className='pokemon-tittle'>
               <span>#{id} </span>
               <span>{nombre}</span>
               
               </p>
               </div>
            
               
               
           
       
    )
}

const Pokemones= ()=>{

    const[total,setTotal]=useState(20)


    const {pokemones} =usePokemones(total)
        
        
        return (
            <section className='pokemon-container'>
                {pokemones.map(pokemon => <Pokemon key={pokemon.id} {...pokemon}></Pokemon>)}
                
             <button onClick={()=>{setTotal(total+20)}}>Mas pokemones.</button>   
            </section>

            
            
    )
}
    



export default Pokemones
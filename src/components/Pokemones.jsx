
import { useState } from "react"
import usePokemones from "../hooks/usePokemones"
import InfiniteScroll from 'react-infinite-scroll-component'
import "./pokemones.css"
import Loader from './Loader'




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


    const {pokemones, verMas} =usePokemones(total)
        
        
        return (
            <InfiniteScroll
            dataLength={pokemones.length}
            next={()=>setTotal(total + 20)}
            hasMore={verMas}
            loader={<h4>Cargando ...</h4>}
            endMessage={<h3 className="titulo" style={{gridColumn: "1/6"}}> Lo siento, no hay mas pokemones por mostrar. </h3>}
            >
                
            <section className='pokemon-container'>
                {pokemones.map(pokemon => <Pokemon key={pokemon.id} {...pokemon}></Pokemon>)}
                
             
             
            </section>
            </InfiniteScroll>

            
            
    )
}
    



export default Pokemones
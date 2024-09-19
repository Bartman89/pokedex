
import { useState } from "react"
import usePokemones from "../hooks/usePokemones"
import InfiniteScroll from 'react-infinite-scroll-component'
import "./pokemones.css"
import Loader from './Loader'
import DetallePokemon from './DetallePokemon'




const Pokemon = ({id, imagen, nombre, showDetail})=>{
    return(
        
       
               <div key={id} className='pokemon-card' onClick={showDetail}> 
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
    const[mostrar, setMostrar]=useState({mostrar:false, pokemon:{}})


    const {pokemones, verMas} =usePokemones(total)

    const showDetail = (pokemon)=>{setMostrar({mostrar:true, pokemon})}

    const closeDetail =(pokemon)=>setMostrar({mostrar:false, pokemon:{}})
        
        
        return (
            <>
            <DetallePokemon {...mostrar} cerrar={closeDetail}></DetallePokemon>
            <InfiniteScroll
            dataLength={pokemones.length}
            next={()=>setTotal(total + 20)}
            hasMore={verMas}
            loader={<h4>Cargando ...</h4>}
            endMessage={<h3 className="titulo" style={{gridColumn: "1/6"}}> Lo siento, no hay mas pokemones por mostrar. </h3>}
            >
                
            <section className='pokemon-container'>
                {pokemones.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} showDetail={()=>showDetail(pokemon)}></Pokemon>)}
                
             
             
            </section>
            
            </InfiniteScroll>
            </>
            
            
    )
}
    



export default Pokemones
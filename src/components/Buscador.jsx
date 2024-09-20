import { VariableBusqueda } from "../context/VariableBusqueda"
import { Buscar } from "./Icons"
import "./buscador.css"


import { useContext, useState } from "react"

const Buscador = ()=>{

    const {handleChangeVariable, handleBusquedaIndividual, busquedaIndividual, handleReturn,variable, deshabilitado} =useContext(VariableBusqueda,)
    
    

return (
    <>
    
    <h3 className="titulo">Mas de 800 pokemones , elige tu favorito.</h3>
    <section className="container-buscar">
        <input required onChange={handleChangeVariable} value={variable} type="text" placeholder="Encuentra tu pokemon" className="input-buscar" />
        <button disabled={deshabilitado} onClick={()=>{ busquedaIndividual !== 1 ?handleBusquedaIndividual() : handleReturn()}} className="btn-buscar">
            
           {busquedaIndividual ? "Mostrar todos" : "Buscar pokemon"} </button >
    </section>
    </>
    
)
}


export default Buscador
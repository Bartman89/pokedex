import { Buscar } from "./Icons"
import "./buscador.css"

const Buscador = ()=>{
return (
    <>
    <h3 className="titulo">Mas de 800 pokemones , elige tu favorito.</h3>
    <section className="container-buscar">
        <input type="text" placeholder="Encuentra tu pokemon" className="input-buscar" />
        <button className="btn-buscar">
            <Buscar></Buscar>
            Buscar pokemon</button>
    </section>
    </>
    
)
}


export default Buscador
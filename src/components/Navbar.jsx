import { Logo, Sol, Luna } from "./Icons"
import "./Navbar.css"
import {useState, useEffect} from 'react'


const Navbar = ()=>{

    const [tema, setTema]=useState
    ('claro')

    const handleChange = (e)=>{
        setTema(e.target.checked ? 'oscuro' : 'claro')
    }

    useEffect (()=>{
        document.body.setAttribute('data-tema', tema)
    }, [tema])

    return(
        <nav>
        <Logo></Logo>
        
        <a href="https://contador-wheat-six.vercel.app/">
        <span style={{ fontWeight: 'bold' }}>Volver a Home</span>
            </a>

        <div className="switch" >
        
            <Sol></Sol>
            <label    >
                <input type="checkbox" className="check-switch" hidden onChange={handleChange}/>
                <span className="slider"></span>
            </label>
            <Luna></Luna>
        </div>
        </nav>
    )
}

export default Navbar
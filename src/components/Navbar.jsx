import { Logo, Sol, Luna } from "./Icons"
import "./Navbar.css"

const Navbar = ()=>{
    return(
        <nav>
        <Logo></Logo>
        
        <a href="https://contador-wheat-six.vercel.app/">
        <span style={{ fontWeight: 'bold' }}>Volver a Home</span>
            </a>

        <div className="switch">
        
            <Sol></Sol>
            <label>
                <input type="checkbox" className="check-switch" hidden/>
                <span className="slider"></span>
            </label>
            <Luna></Luna>
        </div>
        </nav>
    )
}

export default Navbar
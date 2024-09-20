import { createContext, useState } from "react";

export const VariableBusqueda = createContext();




export const VariableProvider = ({ children }) => {
    
    const[deshabilitado, setDeshabilitado]=useState(true)

    const [variable, setVariable] = useState(null);

    const[total,setTotal]=useState(20)  

    const[verMas, setVerMas]=useState(true)
    

    const[busquedaIndividual, setBusquedaIndividual] =useState(null)

    const handleBusquedaIndividual = ()=>{
        setBusquedaIndividual(1)
        setVerMas(false)
    }

    const handleReturn = ()=>{
        
        
        setBusquedaIndividual(null)
        setVariable("")
        setTotal(20)
        setVerMas(true)
        setDeshabilitado(true)
    }
    

    const handleChangeVariable = (e) => {
        
        const valor =e.target.value.toLowerCase()

        setVariable (valor);
        
        

        setDeshabilitado(false)
        
    };

    return (
        <VariableBusqueda.Provider value={{variable, handleChangeVariable, handleBusquedaIndividual, busquedaIndividual, handleReturn, total,setTotal, verMas, deshabilitado}}>
            {children}
        </VariableBusqueda.Provider>
    );
};

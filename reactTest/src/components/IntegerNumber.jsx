import { useState } from "react"

const IntegerNumber = ()=>{
    const [number, setNumber] = useState()
    const onSubmit =(e)=>{  
        if(/^[1-9]\d*$/.test(number)){
            e.preventDefault();
            setNumber('')
        }else{
            alert('Por favor ingresa un numero entero positivo')
        }
    }

    return (
        <>
          <form 
            onSubmit={onSubmit}>
              <input 
              value={number}
              onChange={(e)=>
                setNumber(e.target.value)}
              type="text" />
              <button>Ingresar Numero</button>
          </form>
        </>
    )
}
export default IntegerNumber
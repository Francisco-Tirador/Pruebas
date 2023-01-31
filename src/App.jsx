import { useState } from 'react'
// import banner from './assets/posterFinal.png'
import banner2 from './assets/Poster1.png'
import './App.css'


function App() {
  const [count, setCount] = useState(true)


  const change = () => {
    if (count === true) {
      setCount(false)
    } else {
      setCount(true)
    }
    console.log(count)
  }

  const AlertRegistro = () => {
    alert("Usuario registrado con exito")
  }

  return (
    <div className='Contenedor3'>

    <div className="contenedor_campos_input">
    <form action="">
        <ul>
        <li>
          <label>E-mail</label>
          <input type="email" className='inputM3' />
        </li>

        <li>
          <label>E-mail</label>
          <input type="email" className='inputM3' />
        </li>
        </ul>
      </form>
    </div>
    </div>
  )
}

export default App

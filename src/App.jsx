import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='ContenRegister'>
        <div className='Conten_campos'>
          <div className='Ingresar'>

          </div>
          <div className='Registro'>
            <form >

              <ul className="login_list">
                <div className='input1'>
                <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder={"PREFIJO"} /></li>

                <li className="loginItem"><label htmlFor="login-pass" className="login__label"></label>
                  <input type="text" className=" editedImput" id='login-pass' placeholder={"NOMBRE(S)"} /></li>

                  <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder='APELLIDOS' /></li>

                  <li className="loginItem">
                  <input type="email" className=" editedImput " placeholder='EMEIl' /></li>

                  <li className="loginItem">
                  <input type="tel" className=" editedImput " placeholder='TELEFONO DE CONTACTO' /></li>

                </div>
              <div>
                  <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder='ESPECIALIDAD' /></li>

                  <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder='INSTITUCION' /></li>

                  <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder='PAIS' /></li>

                  <li className="loginItem">
                  <input type="text" className=" editedImput " placeholder='ESTADO' /></li>

                  <li className="loginItem"><label></label>
                  <input type="file" className="" placeholder='' /></li>


              </div>
                 
                  
              </ul>
              <div>
              </div>
              <button> REGISTRAME </button>
            </form>
          </div>
          {/* <img src="https://cdn-icons-png.flaticon.com/512/7817/7817034.png" className='icono' /> */}
        </div>
      </div>
    </div>
  )
}

export default App

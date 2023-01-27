import { useState } from 'react'
// import banner from './assets/posterFinal.png'
import banner2 from './assets/Poster1.png'
import './App.css'


function App() {
  const [count, setCount] = useState(true)


  const change=()=>{
    if(count===true){
      setCount(false)
    }else{
      setCount(true)
    }
    console.log(count)
  }

  const AlertRegistro=()=>{
    alert("Usuario registrado con exito")
  }

  return (
    <div className="Contenedor">
      <div >
          <div  onClick={change} className='btnMovil'>
            <span >{count?"Registrate":"Incia secion"}</span>
          </div>
        <div className="regist">
          <h3>Aun no tienes cuenta?</h3>
          <button className="btnPregunta" onClick={change}>Registrate</button>
        </div>

        <div className="login">
          <h3>Ya tienes cuenta?</h3>
          <button className='btnPregunta' onClick={change}>Inicia sesión</button>
        </div>

          <div className={count?"camposRegistro opciones":"opciones camposlogin"} >
          <div className='imagenCampos'>
              <img src="data:image/png;base64,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" alt="" />
              </div>
          {
            count?
            <div className={count?"contenCampos animationblur":" contenCampos"}>
            
              
            <form action="">
            <ul>
              <li >
                <input type="text" className='input' placeholder='E-mail'/></li>

                <li >
                <input type="password" className='input' placeholder='Password' /></li>
            </ul>
            <button className='btn_input'>
              INGRESAR
            </button>
          </form>
          <br />
        <br />
        <br />
        <form action="">
            <ul>
              <li >
                <input type="text" className='input' placeholder='Nombre'/>
                </li>
                <li >
                <input type="text" className='input' placeholder='Apellidos'/>
                </li>
                <li >
                <input type="text" className='input' placeholder='E-mail'/>
                </li>
                <li >
                <input type="password" className='input' placeholder='Password' /></li>

            </ul>
            <button className='btn_input' onClick={AlertRegistro}>
            REGISTRO
            </button>
          </form>
          </div>
          :
          <div className={count?"contenCamposRegister ":"contenCamposRegister animationblurRegister"}>
          <form action="">
          <ul>
            <li >
              <input type="text" className='input' placeholder='E-mail'/></li>

              <li >
              <input type="password" className='input' placeholder='Password' /></li>
          </ul>
          <button className='btn_input'>
            INGRESAR
          </button>
        </form>
        <br />
        <br />
        <br />
        <form action="">
            <ul>
              <li >
                <input type="text" className='input' placeholder='Nombre'/>
                </li>
                <li >
                <input type="text" className='input' placeholder='Apellidos'/>
                </li>
                <li >
                <input type="text" className='input' placeholder='E-mail'/>
                </li>
                <li >
                <input type="password" className='input' placeholder='Password' /></li>
               
            </ul>
            <button className='btn_input' onClick={AlertRegistro}>
              REGISTRO
            </button>
          </form>
        </div>
          }
         
          </div>
          </div>
       
      </div>
  )
}

export default App

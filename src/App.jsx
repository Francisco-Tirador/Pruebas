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
              <img src="https://cdn.pixabay.com/photo/2020/06/08/03/33/landscape-5272815_960_720.jpg"></img>
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

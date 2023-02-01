import { useState } from 'react'
// import banner from './assets/posterFinal.png'
import banner2 from './assets/Poster1.png'
import './App.css'




function App() {
  const [count, setCount] = useState(true)





  var label1 = document.getElementById("label1");
  var input1 = document.getElementById("input1");

  input1.addEventListene("focus", e => {
    if (input1.value === "") {
      label1.classList.add("inputSeleccionado");
    }
  });
  input1.addEventListener("blur", e => {
    if (input1.value === "") {
      label1.classList.remove("inputSeleccionado");
    }
  });


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
    <div className='A1'>

      <div className='image3'>
        <img src="https://socmexcirped.org/img2023/TEMPORAL2023.png" alt="" />
      </div>
      <div class="grupoLI" id="xD">
        <label for="" id="label1">First Name</label>
        <input type="text" id="input1"/>
      </div>
      <div className='Contenedor3'>

        <div className="contenedor_campos_input">
          <p className='PALABRA'>SIGNIN</p>
          <div className='Bienvenida'>
            <p>Bienvenido</p>
            <p>Inicie sesión.</p>
          </div>
          <form action="">
            <ul>
              <li>
                <label className='pal'>E-mail</label>
                <input type="text" required className='inputM3' />

              </li>

              <li>
                <label className='pal'>Password</label>
                <input type="email" className='inputM3' />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

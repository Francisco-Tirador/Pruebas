import { useState } from 'react'





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
    <div className='A5'>
      {
        count?<div className='ContenM5'>
        <div className='preguntasM5' onClick={change}>¿Aún no te registras?</div>
        
        <div className='Bienvenida5'>
        <p className='texto5'>Bienvenido</p>
        <p>Inicie sesión.</p>
        </div>
     <div className='ContenInputsM5'>
       <form action="">
            <ul>
            <li className='liM5'>
                <label htmlFor="" className='laM5'>Ingresa tu correro</label>
                <img className='IconInput' src="https://cdn-icons-png.flaticon.com/512/3494/3494619.png" alt="" />
                <input className='inputM5' type="text" placeholder='ejemplo@ejemplo.com' />
              </li>
              <li className='liM5'>
              <label htmlFor="" className='laM5'>Ingresa tu contraseña</label>
               <img  className='IconInput' src="https://cdn-icons-png.flaticon.com/512/4520/4520142.png" alt="" />
                <input className='inputM5' type="text" placeholder='Password' />
              </li>
            </ul>
            <button className='pald btn5'>Iniciar sesión</button>
          </form>
     </div>
         
      </div>:
      <div className='ContenM5'>
      <div className='preguntasM5' onClick={change}>¿Ya tienes cuenta?</div>
      
      <div className='Bienvenida5'>
      <p className='texto5'>Bienvenido</p>
      <p>Inicie sesión.</p>
      </div>
   <div className='ContenInputsM5'>
     <form action="">
          <ul>
          <li className='liM5'>
              <label htmlFor="" className='laM5'>Ingresa tu correro</label>
              <img className='IconInput' src="https://cdn-icons-png.flaticon.com/512/3494/3494619.png" alt="" />
              <input className='inputM5' type="text" placeholder='ejemplo@ejemplo.com' />
            </li>
            <li className='liM5'>
            <label htmlFor="" className='laM5'>Ingresa tu contraseña</label>
             <img  className='IconInput' src="https://cdn-icons-png.flaticon.com/512/4520/4520142.png" alt="" />
              <input className='inputM5' type="text" placeholder='Password' />
            </li>
            <li className='liM5'>
            <label htmlFor="" className='laM5'>Ingresa tu contraseña</label>
             <img  className='IconInput' src="https://cdn-icons-png.flaticon.com/512/4520/4520142.png" alt="" />
              <input className='inputM5' type="text" placeholder='Password' />
            </li>
            <li className='liM5'>
            <label htmlFor="" className='laM5'>Ingresa tu contraseña</label>
             <img  className='IconInput' src="https://cdn-icons-png.flaticon.com/512/4520/4520142.png" alt="" />
              <input className='inputM5' type="text" placeholder='Password' />
            </li>
          </ul>
          <button className='pald btn5'>Iniciar sesión</button>
        </form>
   </div>

   
       
    </div>

      }
    </div>








  )
}

export default App

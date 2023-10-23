import React, { useState } from 'react'

const Menu4 = () => {
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
    <div className='A4'>
    <div className='contenLazo'>
    <div className='lazo l1'></div>
<div className='lazo l2'></div>
    </div>

  {/* <div className='image3'> */}
    {/* <img src="https://socmexcirped.org/img2023/TEMPORAL2023.png" alt="" /> */}
    {/* <img src="https://jc-innovation.com/mexctrims/assets/images/Temporal.png" alt="" />
  </div> */}
{
  !count? 
  <div className='Contenedor4'>
  {/* <div className='FondoInputs f2'></div> */}
  <div className='hoyo'></div>
    <div className="contenedor_campos_input">
  <div className='FondoInputs f1'></div>

  <div className='f3' onClick={change}>¿Ya tienes cuenta?</div>

      {/* <p className='PALABRA'>SIGNIN</p> */}
      <div className='Bienvenida su'>
        <p className='texto1'>Registro super usuario</p>
        <hr  className='hr'/>
        {/* <p>Inicie sesión.</p> */}
      </div>
      <form action="">
        <ul>
          <li>
            {/* <label className='pal'>E-mail</label> */}
            <input   type="text" required className='inputM3' placeholder='Nombre'  />

          </li>
          <li>
            {/* <label className='pal'>E-mail</label> */}
            <input   type="text" required className='inputM3' placeholder='Apellido'  />

          </li>
          <li>
            {/* <label className='pal'>E-mail</label> */}
            <input   type="email" required className='inputM3' placeholder='E-mail'  />

          </li>

          <li>
            {/* <label className='pal'>Password</label> */}
            <input type="password" className='inputM3' placeholder='Password'/>
          </li>
        </ul>
        <button className='pald'>Registrarme</button>
      </form>
    </div>
  </div>:
   <div className='Contenedor4'>
     <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <div class="content"></div>
  {/* <div className='FondoInputs f2'></div> */}
  <div className='hoyo'></div>
    <div className="contenedor_campos_input">
  <div className='FondoInputs f1'></div>

  <div className='f3' onClick={change}>¿Aún no te registras?</div>

      {/* <p className='PALABRA'>SIGNIN</p> */}
      <img  className='imnPerfil' src="https://cdn-icons-png.flaticon.com/512/4871/4871351.png" alt="" />
      <div className='Bienvenida4'>
        <p className='texto1'>Bienvenido</p>
        <hr  className='hr'/>
        <p>Inicie sesión.</p>
      </div>
      <form action="">
        <ul>
          <li>
            {/* <label className='pal'>E-mail</label> */}
            <input   type="email" required className='inputM3' placeholder='E-mail'  />

          </li>

          <li>
            {/* <label className='pal'>Password</label> */}
            <input type="password" className='inputM3' placeholder='Password'/>
          </li>
        </ul>
        <button className='pald'>Iniciar sesión</button>
      </form>
    </div>
  </div>

}
</div>
  )
}

export default Menu4

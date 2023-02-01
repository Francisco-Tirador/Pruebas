import React from 'react'

const Menu3 = () => {
  return (
    <div className='A1'>

      {/* <div className='image3'> */}
        {/* <img src="https://socmexcirped.org/img2023/TEMPORAL2023.png" alt="" /> */}
        {/* <img src="https://jc-innovation.com/mexctrims/assets/images/Temporal.png" alt="" />
      </div> */}
    {
      count? 
      <div className='ContenedorR3'>
      {/* <div className='FondoInputs f2'></div> */}
      
        <div className="contenedor_campos_input">
      <div className='FondoInputs f1'></div>

      <div className='f3' onClick={change}>¿Ya tienes cuenta?</div>

          {/* <p className='PALABRA'>SIGNIN</p> */}
          <div className='Bienvenida'>
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
      </div>: <div className='Contenedor3'>
      {/* <div className='FondoInputs f2'></div> */}
      
        <div className="contenedor_campos_input">
      <div className='FondoInputs f1'></div>

      <div className='f3' onClick={change}>¿Aún no te registras?</div>

          {/* <p className='PALABRA'>SIGNIN</p> */}
          <div className='Bienvenida'>
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

export default Menu3

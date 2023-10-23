import { useState } from 'react'

const Menu2 = () => {
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
    <div className='container'>
    <div className='OpcionesP'><div className='Rig' onClick={change}>Login</div><div className='Lef' onClick={change}>Sign up</div><div className={`carga ${count?"positionLef":""}`}></div></div>
    {/* <div className='div R'></div>
    <div className='div L'></div> */}
    <div className={`Signin campos2 ${count?"":"AnimationLogin"}`}>
      <form action="" className={count?"":"opcidadForm"}>
        <ul>
        <li>
          <label>E-mail</label>
          <input type="email" />
        </li>

        <li>
          <label>E-mail</label>
          <input type="email" />
        </li>
        </ul>
      </form>
    </div>

    <div className={`ContenRegister campos2 ${count?"AnimationRegister":""}`}>

    <form action="" className={count?"opcidadForm":""}>
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
      </form>
    </div>
  </div>
  
  )
}

export default Menu2

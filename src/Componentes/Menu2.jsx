import React from 'react'

const Menu2 = () => {
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
          <label>Name</label>
          <input type="email" />
        </li>

        <li>
          <label>Last Name</label>
          <input type="email" />
        </li>
        
        <li>
          <label>E-mail</label>
          <input type="email" />
        </li>
        
        <li>
          <label>password</label>
          <input type="email" />
        </li>
        </ul>
      </form>
    </div>
  </div>
  )
}

export default Menu2

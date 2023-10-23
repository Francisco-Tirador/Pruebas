import { useState } from 'react'
// import banner from './assets/posterFinal.png'
import banner2 from './assets/flag-alt.png'
import './App.css'
import Menu1 from './Componentes/Menu1'
import Menu2 from './Componentes/Menu2'
import Menu3 from './Componentes/Menu3'
import Menu4 from './Componentes/Menu4'
import Menu5 from './Componentes/Menu5'




function App() {
  const [MenuActivo, setMenu] = useState(0)

  const menus = [
    { menu: <Menu1 />, id: 1 },
    { menu: <Menu2 />, id: 2 },
    { menu: <Menu3 />, id: 3 },
    { menu: <Menu4 />, id: 4 },
    { menu: <Menu5 />, id: 5 }
  ]
  const activarMenu = (id) => {
    setMenu(menus.findIndex(m => m.id == id))
  }
  return (

    <>
      <div className='Nav'>
        <ul >
          {
            menus.map(menu => (
              <li
               key={menu.id}
               className={menu.id - 1 == MenuActivo && "active"} 
               onClick={() => activarMenu(menu.id)}>Menu {menu.id}
              </li>
            ))
          }
        </ul>
      </div>
      {
        menus[MenuActivo].menu
      }

    </>

  )
}

export default App

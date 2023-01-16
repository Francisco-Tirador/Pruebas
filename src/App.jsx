import { useState } from 'react'
import banner from './assets/cpt1.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='ContenRegister'>
        <div className='Conten_campos'>
          <img src={banner} alt="" />

        </div>
        <div className='Registro'>
          <div className="fondo f1"></div>
          <span className='fondo f2'></span>
          <form >

            <ul className="login_list">
              <div className='input1'>

                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="" />
                  
                    <select name="prefijotxt_s" id="prefijotxt_s" className="editedImput" onchange="cambiaPrefijo();" data-plugin-selectTwo required>

                      <option value="">PREFIJO</option>

                      <option value="DR." >DR.</option>

                      <option value="DRA." >DRA.</option>

                      <option value="ENF." >ENF.</option>

                      <option value="ENF. PER.">ENF. PER.</option>

                      <option value="ENF. QCA.">ENF. QCA.</option>

                      <option value="L.E." >L.E.</option>

                      <option value="L.E.O.">L.E.O.</option>

                      <option value="E.A.S.E.">E.A.S.E.</option>

                      <option value="E.A.S.SE.">E.A.S.SE.</option>

                      <option value="LIC." >LIC.</option>

                      <option value="L.D.">L.D.</option>

                      <option value="SR.">SR.</option>

                      <option value="SRA.">SRA.</option>

                      <option value="TTR. RR.">LIC. NUT.</option>

                      <option value="LIC. NUT.">LIC. NUT.</option>

                      <option>(VACIO)</option>

                    </select>

                    <label class="error" for="prefijotxt_s"></label>

                  

                </li>


                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="" />
                  <input type="text" className=" editedImput" id='login-pass' placeholder={"NOMBRE(S)"} /></li>

                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="" />
                  <input type="text" className=" editedImput " placeholder='APELLIDOS' /></li>

                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/4574/4574730.png" alt="" />
                  <input type="email" className=" editedImput " placeholder='EMEIl' /></li>

                  <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/4574/4574730.png" alt="" />
                  <input type="password" className=" editedImput " placeholder='PASSWORD' /></li>


                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="" />
                  <input type="tel" className=" editedImput " placeholder='TELEFONO ' /></li>

              </div>
              <div>
                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/3240/3240345.png" alt="" />
                  <input type="text" className=" editedImput " placeholder='ESPECIALIDAD' /></li>

                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/3051/3051188.png" alt="" />
                  <input type="text" className=" editedImput " placeholder='INSTITUCION' /></li>

               

                  <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="" />

                    <select name="prefijotxt_s" id="prefijotxt_s" className="editedImput" onchange="cambiaPrefijo();" data-plugin-selectTwo required>

                      <option value="">PAIS</option>

                      <option value="DR." >DR.</option>

                      <option value="DRA." >DRA.</option>

                      <option value="ENF." >ENF.</option>

                      <option value="ENF. PER.">ENF. PER.</option>

                      <option value="ENF. QCA.">ENF. QCA.</option>

                      <option value="L.E." >L.E.</option>

                      <option value="L.E.O.">L.E.O.</option>

                      <option value="E.A.S.E.">E.A.S.E.</option>

                      <option value="E.A.S.SE.">E.A.S.SE.</option>

                      <option value="LIC." >LIC.</option>

                      <option value="L.D.">L.D.</option>

                      <option value="SR.">SR.</option>

                      <option value="SRA.">SRA.</option>

                      <option value="TTR. RR.">LIC. NUT.</option>

                      <option value="LIC. NUT.">LIC. NUT.</option>

                      <option>(VACIO)</option>

                    </select>

                    <label class="error" for="prefijotxt_s"></label>

                  

                </li>
              

                <li className="loginItem"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="" />
                  



                    <select name="prefijotxt_s" id="prefijotxt_s" className="editedImput" >

                      <option value="">ESTADO</option>

                      <option value="DR." >DR.</option>

                      <option value="DRA." >DRA.</option>

                      <option value="ENF." >ENF.</option>

                      <option value="ENF. PER.">ENF. PER.</option>

                      <option value="ENF. QCA.">ENF. QCA.</option>

                      <option value="L.E." >L.E.</option>

                      <option value="L.E.O.">L.E.O.</option>

                      <option value="E.A.S.E.">E.A.S.E.</option>

                      <option value="E.A.S.SE.">E.A.S.SE.</option>

                      <option value="LIC." >LIC.</option>

                      <option value="L.D.">L.D.</option>

                      <option value="SR.">SR.</option>

                      <option value="SRA.">SRA.</option>

                      <option value="TTR. RR.">LIC. NUT.</option>

                      <option value="LIC. NUT.">LIC. NUT.</option>

                      <option>(VACIO)</option>

                    </select>

                    <label class="error" for="prefijotxt_s"></label>


                </li>

                <li className="loginItem INfile" htmlFor="archivo">
                  <label htmlFor="archivo">SUBIR SEDULA PROFECIONAL</label>
                  <input type="file" className='File' id='archivo' /></li>


              </div>


            </ul>
            <div>
            </div>
            <button className='buttoIMf'> REGISTRAME </button>
          </form>
        </div>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/7817/7817034.png" className='icono' /> */}
      </div>



      <span className='circulo uno'></span>
      <div className='circulo dos'></div>
      <span className='circulo tres'></span>
      <div className='circulo cuatro'></div>

    </div>

  )
}

export default App

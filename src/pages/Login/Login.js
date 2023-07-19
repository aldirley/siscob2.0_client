import { useState } from 'react'

// CSS
import  './Login.css'

import cbmpa from '../../img/cbmpa.png'
import dc from '../../img/dc.png'

const Login = () => {

  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container_login">
        <div className="wrap_login">

          <form className="login_form">
          <span className="login_form_title">
              <img src={cbmpa} alt="cbmpa" /><img src={dc} alt="dc" />
            </span>
            <span className="login_form_title">Bem-vindo ao SisCob</span>

            <div className="wrap_input">
              <input className={email !== "" ? 'has_val input' : 'input'} 
                     type="email"
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} />
              <span className="focus_input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap_input">
              <input className={password !== "" ? 'has_val input' : 'input'} 
                     type="password"
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} />
              <span className="focus_input" data-placeholder="Senha"></span>
            </div>

            <div className="container_login_form_btn">
              <button className="login_form_btn">Login</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import styles from './NavBar.module.css'

import { AuthContexts } from '../../contexts/AuthContexts'

const NavBar = () => {


  const { authenticated: logged} = useContext(AuthContexts)


  return (
    <nav className={styles.navbar}>
      <NavLink to="/home" className={styles.brand}>
        Sis<span>Cob</span> - Sistema de cadastro de ocorrência
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/cadastros" className={({ isActive }) => (isActive ? styles.active : styles.no_active)}>
        {logged  &&  "Cadastros" }
          </NavLink>
        </li>
        <li>
          <NavLink to="/consultas" className={({ isActive }) => (isActive ? styles.active :  styles.no_active)}>
          {logged  &&  "Consultas" } 
          </NavLink>
        </li>
        <li>
          <NavLink to="/relatorios" className={({ isActive }) => (isActive ? styles.active : styles.no_active)}>
          {logged  &&  "Relatórios" } 
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
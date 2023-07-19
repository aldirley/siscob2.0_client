import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/home" className={styles.brand}>
        Sis<span>Cob</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/cadastros" className={({ isActive }) => (isActive ? styles.active : styles.no_active)}>
            Cadastros
          </NavLink>
        </li>
        <li>
          <NavLink to="/consultas" className={({ isActive }) => (isActive ? styles.active :  styles.no_active)}>
            Consultas
          </NavLink>
        </li>
        <li>
          <NavLink to="/relatorios" className={({ isActive }) => (isActive ? styles.active : styles.no_active)}>
            Relatórios
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
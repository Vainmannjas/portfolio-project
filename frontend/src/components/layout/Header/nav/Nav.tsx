import { FC } from "react"
import { NavLink } from "react-router-dom"
import './Nav.scss'

const Nav: FC = () => {
    const activeLink = "nav__list-link nav__list-link_active";
    const normalLink = "nav__list-link";

  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__list-item">
                <NavLink to="/new-in" className={({isActive}) => isActive ? activeLink : normalLink}>
                    New In
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/all-clothing" className={({isActive}) => isActive ? activeLink : normalLink}>
                    All clothing
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/coats" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Coats
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/jackets" className={({isActive}) => isActive ? activeLink : normalLink}>
                    jackets
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/dresses" className={({isActive}) => isActive ? activeLink : normalLink}>
                    dresses
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/trousers" className={({isActive}) => isActive ? activeLink : normalLink}>
                    trousers
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav

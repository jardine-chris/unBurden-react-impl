import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/projects/add">Add Project</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks

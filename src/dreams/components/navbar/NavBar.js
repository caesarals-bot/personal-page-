import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
        <Link 
            to="/"
        >
            Home
        </Link>
        <div>
            <NavLink 
                to="/home"
            >
                Home
            </NavLink>
            <NavLink 
                to="/blog"
            >
                Blog
            </NavLink>
            <NavLink 
                to="/game"
            >
                Juega
            </NavLink>
            <NavLink 
                to="/about"
            >
                Nosotros
            </NavLink>
        </div>
    </nav>
  )
}

export default NavBar
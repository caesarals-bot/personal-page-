import { Link, NavLink} from "react-router-dom"

import { classNames } from './classes.js'
import cesarl from '../../../assets/img/cesarl.svg'
import { useState } from "react"
import { routes } from "../../../routes/routes.js"



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {     
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
   
    const logoC = `${cesarl}`
  return (
    <nav className="navbar">
        <div className="navbar__header">
            <div>
                <Link
                    className="logo"
                    to="/"
                >
                    <img 
                        className="img-cals"
                        src={logoC}
                        alt='cesarl'
                    />
                </Link>
            </div>
            <div>
                <label  htmlFor="toggler"><i className="ri-menu-line" onClick={handleOpen}></i></label>
            </div>    
        </div>
        <div className={classNames(isOpen ? " menu" : " no-menu")}>
            <ul className="list">
                {
                    routes.map(({path, name})=> (
                        <li className="data-container" key={path}>
                            <NavLink
                                className='btn'
                                to={path}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
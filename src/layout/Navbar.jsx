import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'  
import logo2 from "../assets/logo2.png"
import { FaLongArrowAltRight } from "react-icons/fa"



function Navbar() {
  return (
    <nav className={style.componentContainer}>
        <div className={style.navbarContainer}>
            <div className={style.logoLeftContainer}>
                <NavLink to="/"><img className={style.logo} src={logo2} alt="company logo" ></img></NavLink>
            </div>
            <div className={style.linksMiddleContainer}>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/Treatments">Treatments</NavLink>
                <NavLink to="/Location">Location</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/book">Book</NavLink>
            </div>
            <div className="text-white bg-[rgb(39,32,32)] py-[12px] px-[17px] w-50 flex justify-center items-center gap-2">
                <Link className={style.bookButton}>book now</Link> <FaLongArrowAltRight size={15} /> 
            </div>

        </div>
    </nav>

  )
}

export default Navbar

import { Link } from "react-router-dom"
import fourcoastLogoGreen from '../images/FL-logo.PNG'
import fourcoastLogoWhite from '../images/FLb&w-logo.PNG'
import { FiSun, FiMoon } from 'react-icons/fi'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

const Header = ({ isActive, toggleMenu,  handleClick, isDarkMode }) => {
  return (
    <header className='Header'>
      <section className="header-logoLine">
        <div className="header-divLogoLine">
          <figure className="Header-figure">
            {
              isDarkMode ? <img src={fourcoastLogoWhite} alt="HeaderLogo" /> : <img src={fourcoastLogoGreen} alt="HeaderLogo" />
            }
          </figure>

          <div onClick={handleClick} className="moonSun">
            {
              isDarkMode ? <FiSun className="headerMobileIcon" /> : <FiMoon className="headerMobileIcon"/>
            }
          </div>

          <div onClick={handleClick} className="toggleOffOn">
            {
              isDarkMode ? <FaToggleOff className="headerIcon"/> : <FaToggleOn className="headerIcon"/>
            }
          </div>
        </div>

        <button className="header__menuBtn" onClick={toggleMenu}>
          <div className={`menuIcon ${isActive ? 'active' : ''}`}>
          </div>
        </button>

        <nav className={`nav ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <ul>
            <li><Link to={"/"} >HOME</Link></li>
            <li>
              <Link to={"about"} >
                <span className="nowrap">ABOUT US</span>
              </Link>
            </li>
            <li>
              <Link to={"service"} >
                <span className="nowrap">SERVICES</span>
              </Link>
            </li>
            <li>
              <Link to={"contact"} >
                <span className='nowrap'>CONTACT US</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
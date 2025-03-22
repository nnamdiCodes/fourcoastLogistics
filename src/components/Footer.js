import footerLogo from '../images/FLb&w-logo.PNG'
import { Link } from "react-router-dom"
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa" 

const Footer = () => {
  return (
    <footer>
      <div className="listItems">
          <ul className="navUl">
            <li>
              <img src={footerLogo} alt="Footer img" className='footer-logo'/>
            </li>
            <li className="listItem"><Link to={"/"} >HOME</Link></li>
            <li className="listItem"><Link to={"about"} >ABOUT US</Link></li>
            <li className="listItem"><Link to={"service"} >SERVICES</Link></li>
            <li className="listItem"><Link to={"contact"} >CONTACT US</Link></li>
          </ul>
      </div>

      <ul className="socialIcons">
          <li>
              <a href="https://wa.me/2348101060286 " target="_blank" rel="noopener noreferrer"> 
                <FaWhatsapp className="icon"/> 
              </a>
          </li>
          <li>
              <a href="https://www.instagram.com/fourcoastlogistics.ng/profilecard/?igsh=enR4NGhldzkwMW4=" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon"/> 
              </a>
          </li>
          <li>
              <a href="https://www.tiktok.com/@fourcoastlogistics.ng?_t=ZM-8tbdTOBm4Kj&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="icon"/>
              </a>
          </li>
      </ul>
    </footer>
  )
}

export default Footer
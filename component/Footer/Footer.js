import { NavLink } from "react-router-dom";
import {FaInstagram, FaWhatsapp, FaPaperPlane} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <NavLink to='/' className='footer-logo'>LOGO</NavLink>
        <NavLink to='/' className='footer-menu'>О клинике</NavLink>
        <NavLink to='/services' className='footer-menu'>Услуги</NavLink>
        <NavLink to='/specialist' className='footer-menu'>Специалисты</NavLink>
        <NavLink to='/prices' className='footer-menu'>Цены</NavLink>
        <NavLink to='/contact' className='footer-menu'>Контакты</NavLink>
        <NavLink to ='/contact' className="inst"><FaInstagram/></NavLink>
        <NavLink to ='/contact' className="what"><FaWhatsapp/></NavLink>
        <NavLink to ='/contact' className="tell"><FaPaperPlane/></NavLink>
    </div>
  )
}

export default Footer;
import {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import { Button } from '../Buttons/Buttons';
import {FaBars, FaTimes, FaWhatsapp} from 'react-icons/fa';
import {BsGeoAlt} from 'react-icons/bs';
import './Navbar.css';
 

function NavBar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className='navbar-container-logo'>
        <div className='menu-icon'  onClick={handelClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <NavLink to="/" className='navbar-logo' onClick={closeMobileMenu}>
                Logo
            </NavLink>
            <div className='navbar-geo-icon'>
                <BsGeoAlt/>
            </div>
            <NavLink to='/contact' className='navbar-geo' onClick={closeMobileMenu}>
             
                <p className='navbar-geo-text-city'>Ростов-на-Дону</p>
                <p className='navbar-geo-text-street'>ул. Ленина 2б</p>
            </NavLink>
            <NavLink to='/contact' className='navbar-contact' onClick={closeMobileMenu}>
                <FaWhatsapp/> +7(863)000 00 00
            </NavLink>
      
            {button && <Button buttonSize='btn--outline'>Записаться на прием </Button>} 
        </div>
        <div className="navbar-container-menu">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                    <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                        О клинике
                    </NavLink>
                </li> 
                <li className='nav-item'>
                    <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Услуги
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/specialist' className='nav-links' onClick={closeMobileMenu}>
                        Специалисты
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/prices' className='nav-links' onClick={closeMobileMenu}>
                        Цены
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Контакты
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <button className={click ? 'btn-mobile active' : 'btn-mobile'} onClick={closeMobileMenu}>Записаться на прием</button>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
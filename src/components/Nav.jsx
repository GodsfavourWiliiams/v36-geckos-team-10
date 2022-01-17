import { useRef, useState } from 'react';
import { BsFillMoonStarsFill, BsCloudSun } from 'react-icons/bs'
// import logo from '../assets/logo.jpg';
import logoAlt from '../assets/logoAlt.jpg'
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const activeClassName = {borderBottom: '1px solid #333'};
    const [themeIcon, setThemeIcon] = useState(<BsFillMoonStarsFill />);
    const indicator = useRef(null)
    const toggleTheme = () => {
        indicator.current.classList.toggle('white')
        setThemeIcon(indicator.current.classList.contains('white') ? <BsCloudSun/> : <BsFillMoonStarsFill />)
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
<header className=" top-0 h-auto bg-white w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <img className='w-16 h-12' src={logoAlt} alt=""/>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex  flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                        <NavLink to='/features' style={({ isActive }) => isActive ? activeClassName : undefined}>Features</NavLink>
                         </li>
                    <li className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                        <NavLink to='/about' style={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
                    </li>
                    <li className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                        <NavLink to='/showcase' style={({ isActive }) => isActive ? activeClassName : undefined}>Showcase</NavLink>
                    </li>
            </ul>

          </nav>
          <div id='theme-toggle' ref={indicator} onClick={() => toggleTheme()}>
                    <i className='indicator'>{themeIcon}</i>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
        </div>
      </div>
    </header>
            
        </>
    )
}

export default Nav

import { useState } from 'react';
import logoAlt from '../assets/logoAlt.jpg'
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { landingPageObject } from '../features/landingPageObject';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
    const navLinks = Object.keys(landingPageObject);

    return (
      <>
      <nav className="flex items-center justify-between py-3">
        <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between md:px-0 px-3">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start transition-all">
               <Link to="/" className="">
                  <img className='h-12 w-auto' src={logoAlt} alt=""/>
                  </Link>
            <button
              className="cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
            </button>
          </div>
          <div
            className={
              "lg:flex mt-4 md:mt-0 transition-all" +
              (navbarOpen ? " flex" : " hidden")
            }>
            <ul className="flex flex-col lg:flex-row list-none">
                    {useLocation().pathname === '/' && navLinks.map(link => {
                      return (
                      <li key={link} 
                      className="nav-item">
                      <span className="md:px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                         <span className="md:ml-2">{link}</span>
                      </span>
                      </li>
                      )
                    })}              
            </ul>
          </div>
        </div>
      </nav>
          </>
    )
}

export default Navbar;

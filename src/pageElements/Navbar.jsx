import { useState } from 'react';
import logoAlt from '../assets/logoAlt.jpg'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Profile } from '../assets/User_circle.svg';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

    return (
      <>
      <nav className="flex items-center justify-between py-3 md:px-8">
        <div className="w-full max-w-7xl mx-auto flex items justify-between md:px-0 px-3">
          <div className="w-full relative flex justify-between transition-all">
               <Link to="/" className="">
                  <img className='h-12 w-auto' src={logoAlt} alt=""/>
                  </Link>
          </div>
          <div  className="flex">
              <div className="cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Profile className="rounded-full" />
              </div>
                    {useLocation().pathname === '/' ?
                     <div className={"absolute right-4 transition-all duration-300  z-50 w-40 mt-14 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  " +  (navbarOpen ? " block" : " hidden")}>
                         <Link to='/signin' className="py-1">
                              <span className="block py-3 px-4 text-sm hover:text-white hover:bg-indigo-500 ">Sign In</span>
                          </Link> 
                      </div> 
                  :
                  <div className={"absolute right-4 z-50 transition-all duration-300 mt-14 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  " +  (navbarOpen ? " block" : " hidden")}>
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 ">Williams Godsfavour</span>
                    <span className="block text-sm font-medium text-gray-500 truncate ">name@flowbite.com</span>
                  </div>
                      <ul className="">
                          <Link to='/signin'>
                            <span className="block py-3 px-4 text-sm hover:text-white rounded hover:bg-indigo-500 ">Sign Out</span>
                          </Link>
                        </ul> 
                    </div> 
                  }            
          </div>
        </div>
      </nav>
      
          </>
    )
}

export default Navbar;

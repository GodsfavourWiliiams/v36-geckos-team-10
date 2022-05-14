import { useState } from 'react';
import logoAlt from '../assets/logoAlt.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Profile } from '../assets/User_circle.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../pages/firebase/firebase";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  
  const signOut = () => {
    logout()
    navigate("/signin")
  }

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
                     <div className={"absolute right-4 transition-all duration-300  z-50 w-40 mt-14 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  " +  (navbarOpen ? " block" : " hidden")}>
                       {!user ?
                         <Link to='/signin' className="py-1">
                              <span className="block py-3 px-4 text-sm hover:text-white hover:bg-indigo-500 "
                              >Sign In</span>
                          </Link> 
                          :
                          <div className="" onClick={signOut}>
                              <span className="block py-3 px-4 text-sm hover:text-white hover:bg-indigo-500 "
                              >Sign Out</span>
                          </div>
                       }
                      </div> 
                 
          </div>
        </div>
      </nav>
      
          </>
    )
}

export default Navbar;

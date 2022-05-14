import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase/firebase";
import Logo from '../../assets/round-logo.jpg';
import FormInput from "../../components/formInput/formInput";

function Reset() {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/login");
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-3">
    <Link to="/">
        <img src={Logo} className="w-12 h-12" alt="" />
    </Link>
   <div className=" lg:w-1/3 md:w-1/2 w-full my-8 text-center">
       <p aria-label="Login to your account" className="text-2xl mb-1 font-extrabold leading-6 text-gray-800">
           Reset your password
       </p>
  
       <div className="w-full flex items-center justify-between py-5">
           <hr className="w-full bg-gray-400" />
           <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
           <hr className="w-full bg-gray-400  " />
       </div>
            <form >
              <FormInput
                type="email" 
                name="email" 
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button className="bg-indigo-600 border border-transparent rounded-lg py-3 px-8 mb-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" onClick=
                {(e) =>{
                    sendPasswordReset(email);
                    e.preventDefault()
                  }}
                >
                Send password to email
              </button>
                <div>
              <p className="text-center " >Not a member? <Link to="/signup" className="text-indigo-500">Register</Link></p>
              </div>
            </form>
        </div>
    </div>
  );
}

export default Reset;

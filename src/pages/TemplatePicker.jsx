import { Link } from "react-router-dom";
import Footer from '../pageElements/Footer';
import Saly from '../assets/pre.png';
import React from "react";
import Navbar from "../pageElements/Navbar";
import Banner from "../pageElements/Banner";

export function TemplatePicker() {
    return (
      <React.Fragment>
        <Banner/>
        <Navbar/>
      <div className="">
        <div className="max-w-7xl mx-auto py-12 lg:py-16 px-3 lg:px-8 xl:px-0 lg:flex lg:items-center lg:justify-between">
          <div className="text-3xl font-extrabold lg:text-left md:text-center tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
            <p className="my-6 text-base text-gray-500 sm:mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam error neque iste reprehenderit, eius fuga porro voluptas incidunt quia sit magni dicta nemo autem nam cum ratione deserunt at?
              </p>
            <div className="inline-flex rounded-md shadow">
            <Link to="/Workspace" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Launch
            </Link>
            </div>           
          </div>       
          <div className="mt-8 flex justify-center lg:ml-10 lg:mt-0 lg:flex-shrink-0">
            <img src={Saly} alt="" className="rounded-lg h-full max-h-96 w-auto"/>
          </div>          
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    )
  }

  export default TemplatePicker;
  
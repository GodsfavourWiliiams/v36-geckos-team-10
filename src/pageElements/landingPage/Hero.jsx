import React, { useState } from 'react';
import banner1 from '../../assets/design-illustration.svg';
import Preview from '../../assets/prevideo.webm';
import { Link } from "react-router-dom";
import Modal from './Modal';
import { FaTimes } from 'react-icons/fa';

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <>
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-16 pb-12 md:pt-28 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tighter sm:text-3xl tracking-tighter mb-4">UI components for your web 
            <span className="text-indigo-800 "> Application.</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-sm md:text-xl text-gray-600 mb-8"> Get beautiful, responsive, professionally developed  UI components and build your website
                <span className=" text-indigo-500 font-semibold"> quicker</span>
                . Worry less about responsive and beautiful UI, focus more on logic and ship faster.
                A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link to="signin" className=' sm:flex sm:justify-center lg:justify-start'>
                <button
                  className="transform transition duration-200 hover:shadow-xl hover:-translate-y-1w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10 w-full"
                > Get started
               </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={banner1} width="768" height="432" alt="Hero" />
              </div>
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group px-6 py-4 shadow-lg gap-2" 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} >
                <svg className="w-6 h-6 fill-current text-gray-400 text-blue-600 flex-shrink-0 animate animate-ping" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (1 min)</span>
              </button>
            </div>

            {/* Modal */}
             <Modal show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
             <button
                    type="button"
                    className="absolute top-6 right-3 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8 focus:outline-none"
                    onClick={() => setVideoModalOpen(false)}
                  >
                    <FaTimes className="h-6 w-6 text-indigo-700"/>
                  </button>  
              <div className="relative pb-9/16">
                  
                  <div className="flex flex-col justify-center">
                    <video className='focus:outline-none border-0 rounded-lg' controls>
                      <source src={Preview} type="video/webm"/>
                    Your browser does not support the video tag.
                    </video>
                  </div> 
               </div>
            </Modal>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

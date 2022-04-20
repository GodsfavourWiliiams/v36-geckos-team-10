import React from 'react';
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/svg-decorator-blob-9.svg" ;

const CTA = () => {
  return (
    <div className='relative mb-20 lg:mb-24'>
        <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
            <div className="py-16 lg:py-20 bg-indigo-50 rounded-lg relative">
                <div className="px-4 sm:px-16 mx-auto flex justify-between items-center relative z-30 flex-col lg:flex-row text-center lg:text-left">
                    <div className="text-2xl sm:text-4xl font-bold">
                        <h6 className="text-indigo-500 opacity-75">
                            Interested in Easy Web ?     
                        </h6>   
                        <h5 className="text-indigo-700">
                            Join the closed beta now.
                        </h5>  
                    </div>
                    <div className="flex gap-6 justify-between lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row">
                        <button className='shadow rounded text-gray-100 focus:text-gray-300 bg-indigo-700 focus:bg-indigo-800 px-8 py-4'>
                            Get Started
                        </button>
                        <button className='rounded text-indigo-500 bg-indigo-200 hover:bg-indigo-100 px-8 py-4'>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <SvgDecoratorBlob1 className='absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-indigo-700 opacity-5'/>
                    <SvgDecoratorBlob1 className='absolute top-0 right-0 w-80 h-80 transform translate-x-20 -translate-y-64 text-indigo-700 opacity-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA;
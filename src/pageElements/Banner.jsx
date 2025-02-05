import React, { useState } from "react";
import { FaRegLaughSquint, FaTimes} from 'react-icons/fa';

export default function Banner() {
  const [unmounted, setUnmounted] = useState('block');

  return (
    <div className={`bg-indigo-600 ${unmounted}`}>
      <div className="max-w-7xl mx-auto py-3 xl:px-0 md:px-8 px-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <FaRegLaughSquint className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:inline">We announced a new product!</span>
              <span className=" md:inline"> Big news! We're excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 w-full"
            >
              Learn more
            </button>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white "
            >
              <FaTimes onClick={() => setUnmounted('hidden')} className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


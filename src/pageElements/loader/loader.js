import { useState, Fragment } from 'react';
import './loader.css';
import { Dialog, Transition } from '@headlessui/react';

const Loader = () => {
    const [status, setStatus] = useState(true);
    
  return (
    <Transition.Root show={status} as={Fragment}>
    <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto " onClose={setStatus}>
      <div className="min-h-screen text-center block md:px-2 lg:px-4" >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity block backdrop-blur-sm" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden inline-block align-middle h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          enterTo="opacity-100 translate-y-0 md:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 md:scale-100"
          leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
        >
          <div className="inline-block align-middle max-w-4xl">
          <div className='min-h-screen flex flex-col items-center justify-center w-full '>
          <div class="loader"></div>
          </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
    
  )
}

export default Loader;
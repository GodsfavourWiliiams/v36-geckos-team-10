import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { transformCss, transformHtml } from "../features/exportFunctionality";
import { Dialog, Transition } from '@headlessui/react';
import { ReactComponent as DockFIll } from "../assets/dockfill.svg";
import { toast } from 'react-toastify';



export const ExportModal= ({ changeModal, modalContent }) => {

    const handleClose = () => changeModal[1](!changeModal[0]);
    let htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="" sizes="32x32" href="/" />
  <link rel="stylesheet" href="your stylesheet file name">
  <title>Your Title</title>
  </head>
<body>
    ${transformHtml(modalContent).join("\n")}
</body>`;
let cssCode = `
:root {
  scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
${transformCss(modalContent).join('\n')}
`;
    return (
    <Transition.Root show={changeModal[0]} as={Fragment}>
       <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto " onClose={handleClose}>
         <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" >
           <Transition.Child
             as={Fragment}
             enter="ease-out duration-300"
             enterFrom="opacity-0"
             enterTo="opacity-100"
             leave="ease-in duration-200"
             leaveFrom="opacity-100"
             leaveTo="opacity-0"
           >
             <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block backdrop-blur-sm" />
           </Transition.Child>
 
           {/* This element is to trick the browser into centering the modal contents. */}
           <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
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
             <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
               <div className="w-full relative flex items-center rounded-md bg-white px-4 pt-14 pb-8 overflow-auto shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-10">
                 <button
                   type="button"
                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-4 lg:right-4 focus:outline-none"
                   onClick={handleClose}
                 >
                   <FaTimes className="h-6 w-6"/>
                 </button>
 
                 <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                   <div className="aspect-w-2 rounded-lg bg-gray-100 overflow-auto h-full max-h-96 sm:col-span-6 lg:col-span-6 p-3 mScroll">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">HTML</h2>
                        <button className="z-50 bg-gray-100 flex rounded focus:outline-none border-2 shadow border-black"  
                        onClick={() => {
                        navigator.clipboard.writeText( htmlCode );
                        toast.success("Html Copied to Clipboard")
                        }}>
                              <DockFIll/>
                          </button>
                      </div>
                      <code>
                        <pre>                
                          {htmlCode}                
                        </pre>
                      </code>
                   </div>
                   <div className="sm:col-span-6 lg:col-span-6 overflow-auto h-full max-h-96 mScroll bg-orange-100 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">CSS</h2>
                          <button className="flex rounded focus:outline-none border-2 shadow border-black"  
                          onClick={() => {
                          navigator.clipboard.writeText( cssCode )
                          toast.success("Css Copied to Clipboard")
                          }}>
                            <DockFIll />
                          </button>
                      </div>
                        <code>
                          <pre>                
                            {cssCode}                
                          </pre>
                        </code>
                  </div>
                         
                 </div>
               </div>
             </div>
           </Transition.Child>
         </div>
       </Dialog>
     </Transition.Root>
    );
}

export default ExportModal;
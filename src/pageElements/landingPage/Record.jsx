import React from 'react';
import TeamIllustration from "../../assets/team-illustration-2.svg";


function Record() {

  const steps = [
    {
      heading: "Register",
      description: "Create an account with us using Google."
    },
    {
      heading: "Export/ Copy Code",
      description: "Selct and Copy the template that you like from the WorkSpace."
    },
    {
      heading: "Run",
      description: "Follow the instructions and customize the template to your needs."
    }
  ];

  return (
    <div className='relative'>
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-12 md:py-24 md:px-8 px-3 items-center">
          <div className="md:w-5/12 flex-shrink-0 h-80 md:h-auto relative">
            <img src={TeamIllustration} alt="" className='w-full h-full' />
          </div>
          <div className="md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 ">
            <div className="text-content">    
                <p className="text-indigo-600 font-bold text-center md:text-left">
                  STEPS
                </p>
                <h2 className="head mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
                Easy to 
                  <span className="text-indigo-500"> Get Started.</span>
                </h2>
                <ul className="mt-10">
                  {steps.map((step, index) => (
                    <li className='mt-8 flex flex-row items-center md:items-start' key={index}>
                      <div className='font-semibold text-4xl leading-none text-gray-400'>
                        {(index+1).toString().padStart(2,'0')}
                        </div>
                      <div className='mt-3 md:mt-0 ml-6'>
                        <h6 className='leading-none text-xl font-bold'>{step.heading}</h6>
                        <p className='mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium'>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
         </div> 
      </div>
    </div>
  );
}

export default Record;

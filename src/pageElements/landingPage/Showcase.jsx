import React from 'react'
import StatsIllustration from "../../assets/stats-illustration.svg";

const Showcase = () => {
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];

    return (
      // <>
      
      //   {content.showcase.map((item, index) => 
      //   <ShowcaseComponent key={index} heading={item.title} content={item.content} image={item.banner} icon={item.icon} num={index}/>)}
      <div className="relative px-3  md:px-10">
        <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="md:w-5/12 flex-shrink-0 h-80 md:h-auto relative">
              <img src={StatsIllustration} alt="" className='w-full h-full' />
            </div>
            <div className="md:w-7/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 ">
               <p className="text-indigo-600 font-bold text-center md:text-left">
                Our Track Record
                </p>
                <h2 className='mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight'>
                   We have been doing this 
                   <br /> 
                   since <span className="text-indigo-600">1999.</span>
                </h2>
                <p className=" mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex flex-col items-center sm:block text-center md:text-left mt-4">
                {defaultStatistics.map((statistic, index) => (
                    <div className='text-left sm:inline-block sm:mr-12 last:mr-0 mt-4' key={index}>
                      <div className='font-bold text-lg sm:text-xl lg:text-2xl text-gray-800 tracking-wide'>{statistic.value}</div>
                      <div className='font-medium text-indigo-700'>{statistic.key}</div>
                    </div>
                ))}
                </div>
                  <button className='transform transition duration-200 hover:shadow-xl hover:translate-y-1w-full flex items-center justify-center px-8 py-3 border border-transparent w-full md:w-auto text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:px-10 mt-8 md:mt-10'>Learn More</button>
          </div> 
        </div>
      </div>
    );
}

export default Showcase;

import EmailIllustrationSrc from "../../assets/email-illustration.svg";

const Contact = () => {
  return (
    <div className='relative'>
        <div className="flex flex-col items-center justify-center md:flex-row justify-between max-w-screen-xl px-3 md:px-8 mx-auto md:py-24">
            <div className="md:w-5/12 flex-shrink-0 h-80 md:h-auto relative">
                <img src={EmailIllustrationSrc} alt="" className="w-full h-full" />
            </div>
            <div className="md:w-7/12 mt-16 md:mt-0 md:order-first order-last">
                <div className="lg:py-8 text-center md:text-left">
                    <p className="text-center font-bold text-indigo-500 md:text-left">Contact Us</p>
                    <h2 className='mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight'>Feel free to <span className="text-indigo-500">get in touch</span><wbr/> with us.</h2>
                    <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <form className="mt-8 md:mt-10 text-sm flex md:pr-8 pr-0 flex-col max-w-full mx-auto md:mx-0">
                        <input type="email" placeholder='Your Email Address' className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-indigo-500' />
                        <input type="text" placeholder='Full Name' className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-indigo-500' />
                        <input type="text" placeholder='Subject' className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-indigo-500' />
                        <textarea  placeholder='Your Message' className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-indigo-500' />
                        <button className='mt-8 py-4 text-base text-white rounded bg-indigo-700'>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
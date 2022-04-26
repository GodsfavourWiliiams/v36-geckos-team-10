import {useState} from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import customerIllustration from "../../assets/customer-support-illustration.svg";

const Faq = () => {
    
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };
  const faqs = [
    {
      question: "Do you really support Internet Explorer 11 ?",
      answer:
        "Yes, it is, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.."
    },
    {
      question: "Are the templates compatible with the React ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Is there a subscribption service to get the latest templates ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "What kind of payment methods do you accept ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
  return (
    <div className='relative'>
        <div className='max-w-screen-xl mx-auto py-16 lg:py-20 px-3 md:px-10'>
            <div className='flex items-center justify-center'>
                <div className="hidden lg:block w-5/12 flex-shrink-0">
                    <img src={customerIllustration} alt="" />
                </div>
                <div className=" lg:ml-12">
                    <p className="text-indigo-600 font-bold mb-4 text-center lg:text-left">
                        FAQs
                    </p>
                    <h2 className='mt-4 font-black text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight'>
                    Do you have <span className="text-indigo-600">Questions ?</span>
                    </h2>
                    <p className="max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-gray-500">
                        Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.
                    </p>
                        <div className='mt-12'>
                              {faqs.map((faq, index) => (
                                 <div className="`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none"
                                    key={index}
                                    onClick={() => {
                                    toggleQuestion(index);
                                    }}
                                >
                            <div className='flex justify-between items-center'>
                                <span className='text-lg lg:text-xl font-bold cursor-pointer text-gray-700'>{faq.question}</span>
                                     <button className='ml-2 bg-indigo-500 text-gray-100 p-1 rounded-full hover:bg-indigo-700 hover:text-gray-200 transition duration-300'>
                                     {activeQuestionIndex === index ? <FaMinus /> : <FaPlus />}
                                     </button>
                            </div>
                            <span className={` 'pointer-events-none text-sm mt-3 transition duration-300 text-gray-600 sm:text-base leading-relaxed'
                             ${activeQuestionIndex === index ? "block" : "hidden"} `}
                            > {faq.answer} </span>
                        </div>
                        ))}
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq;
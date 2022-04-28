import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import { FaMarker} from "react-icons/fa"

function Dropdown({items = [], handleAdd, title }) {
    const [ isdropdownToggle, setIsdropdownToggle ] = useState(false)


    return (
        <div className="dropdown-wrapper cursor-pointer mb-4 uppercase">
            <div className="flex items-center justify-between w-full rounded-md shadow px-3 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" onClick={() => isdropdownToggle ? setIsdropdownToggle(false) : setIsdropdownToggle(true)}>
            <h3 className="pointer-events-none">{ title }</h3>
                <span className="pointer-events-none">
                    <FaAngleDown className={isdropdownToggle ? 'rotate-180 transition ease-out duration-300' : 'transition'}/>
                </span>
            </div>
            <ul className={`mt-4 bg-white rounded-md shadow z-30 dropdown-list transition duration-900 ease-in-out 
             ${isdropdownToggle ? 'dropdown-toggle' : ''}`}>
                {items.map((item, index) => (
                    <li className="flex justify-between rounded px-3 py-3 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white " key={index} onClick={(e) => handleAdd(item, e)}>{item} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;

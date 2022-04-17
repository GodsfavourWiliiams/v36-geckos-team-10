import { useState } from "react"; 
import { FaBars, FaTimes } from 'react-icons/fa';
import BtnStyled from "../../components/BtnStyled";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import { ReactComponent as Profile } from '../../assets/User_circle.svg';



const Sidebar = ({ handleAdd, toggleModal }) => {
    //Different types of tags can be added bellow and they will show up in the dropdown menu, if the tag has 2 or 3 at the end, it will create 2 or 3 elements.
    const commonTags = ['div', 'div2', 'div3', 'img', 'img2', 'table'];
    const semanticTags = ['header', 'footer', 'nav', 'article'];
    const dropDownStyle = 'p-16';
    const [collapseShow, setCollapseShow] = useState("hidden");

    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-lg bg-white flex flex-wrap items-center justify-between relative md:w-72 z-50 py-4 px-3">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars/>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4"
            to="/"
          >
            Easy Web 
          </Link>
          {/* User */}
          <div className="md:hidden">
            <Profile className=""/>
          </div>
          {/* Collapse */}
          <div
            className={
              `md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 ">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold px-0"
                    to="/"
                  >
                    Easy Web
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes/>
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="mb-8 md:min-w-full" />
            <div className="px-3">
                <Dropdown className={dropDownStyle} items={commonTags} handleAdd={ handleAdd } title='Common Tags' />
                <Dropdown className={dropDownStyle} items={ semanticTags } handleAdd={ handleAdd } title='Semantic Elements' />
                <div className="flex justify-center items-center">
                  <BtnStyled customStyle={ "md:absolute bottom-6 bg-indigo-600 border border-transparent rounded-lg py-3 px-8  text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-64 w-full"
                      } clickFunc={() => {toggleModal[1](!toggleModal[0])}} innerText='Export' />
                </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Sidebar;
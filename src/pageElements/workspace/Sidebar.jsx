import { useState } from "react"; 
import { FaBars, FaTimes } from 'react-icons/fa';
import BtnStyled from "../../components/BtnStyled";
import Dropdown from "../../components/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Profile } from '../../assets/User_circle.svg';
import { ReactComponent as SignOut } from '../../assets/Sign_out_squre.svg';


const Sidebar = ({ handleAdd, toggleModal }) => {
    //Different types of tags can be added bellow and they will show up in the dropdown menu, if the tag has 2 or 3 at the end, it will create 2 or 3 elements.
    const commonTags = ['div', 'div2', 'div3', 'img', 'img2', 'table'];
    const semanticTags = ['nav','breadCrumb', 'hero2', 'form', 'footer'];
    const WebTemplate = ['blog', 'sidenav', 'imageGallery','checkOutForm', ];
    const dropDownStyle = 'p-16';
    const [collapseShow, setCollapseShow] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navigate = useNavigate();

  return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 px-2 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-lg bg-white flex flex-wrap items-center justify-between relative md:w-72 z-50">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden py-1 text-xl leading-none "
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars/>
          </button>
          {/* Brand */}
          <div className="flex items-center justify-between">
          <Link
            className="text-left text-blueGray-600 mr-0 py-6 inline-block whitespace-nowrap text-sm uppercase font-bold"
            to="/"
          >
            Easy Web 
          </Link>
          <button
            className="cursor-pointer border-0 py-1 md:block hidden"
            onClick={() => {
             if (window.confirm("Are you sure you want to Log Out?")) {navigate('/signin')}
          }}
          >
            <SignOut/>
          </button>
          </div>
          {/* User */}
          <div className="cursor-pointer md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
            <Profile className=""/>
          </div>
          
          <div className={"absolute top-24 right-3 z-40 md:hidden text-base list-none bg-white rounded divide-y divide-gray-100 shadow  " +  (navbarOpen ? " block" : "hidden")}>
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 ">Williams Godsfavour</span>
                    <span className="block text-sm font-medium text-gray-500 truncate ">name@flowbite.com</span>
                  </div>
                      <ul className="">
                          <Link to='/signin'>
                            <span className="block py-3 px-4 text-sm hover:text-white rounded hover:bg-indigo-500 ">Sign Out</span>
                          </Link>
                        </ul> 
                    </div> 
          {/* Collapse */}
          <div
            className={
              ` md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute h-screen left-0 w-full bg-white top-0 z-50 overflow-y-auto items-center md:px-0 px-2 flex-1 rounded ${collapseShow ? 'block' : 'hidden'}`
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block py-6">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold"
                    to="/"
                  >
                    Easy Web
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    className="cursor-pointer text-black opacity-50 md:hidden text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow(false)}
                  >
                    <FaTimes/>
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="mb-8 md:min-w-full" />
            <div className="">
                <Dropdown className={dropDownStyle} items={commonTags} handleAdd={ handleAdd } title='Common Tags' />
                <Dropdown className={dropDownStyle} items={ semanticTags } handleAdd={ handleAdd } title='Semantic Elements' />
                <Dropdown className={dropDownStyle} items={ WebTemplate } handleAdd={ handleAdd } title='Templates' />
                <div className="hidden md:flex justify-center items-center ">
                  <BtnStyled customStyle={`bg-indigo-600 fixed bottom-4 border border-transparent rounded-lg py-3 px-8  text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50 w-11/12  md:w-64` } 
                  clickFunc={() => {toggleModal[1](!toggleModal[0])}} innerText='Export' />
                </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Sidebar;
import { useEffect, useState } from "react";
import Builder from "../pageElements/workspace/Builder";
import Sidebar from "../pageElements/workspace/Sidebar";
import Loader from '../pageElements/loader/loader';

const Workspace = ({ toggleModal, buildingBlocks, setBuildingBlocks, changeModal }) => {
    const addBlocks = (tag, e) => {
        setBuildingBlocks([...buildingBlocks, tag]);
        changeModal([...buildingBlocks, tag]);
        // Component added message
        e.target.lastChild.classList.remove('hidden');
        setTimeout(() => {
        e.target.lastChild.classList.add('hidden')
        }, 1500)
    }
    useEffect(()=>{
        let bodyEl = document.querySelector('body');
        bodyEl.style.overflowY = 'hidden'
        return (bodyEl.style.overflowY = 'auto')
    }, []);
       // Loading state 
   const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        // Wait for 7 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 7000);
      }, []);

    return isLoading ?
        <Loader/> :
        <>
        <div className="ws-container">
            <Sidebar handleAdd={addBlocks} toggleModal={toggleModal} />
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} toggleModal={toggleModal} changeModal={changeModal}  />
        </div>
        </>
}

export default Workspace;
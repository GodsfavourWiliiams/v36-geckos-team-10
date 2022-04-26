import { useEffect, useState } from "react";
import Builder from "../pageElements/workspace/Builder";
import Sidebar from "../pageElements/workspace/Sidebar";
import Loader from '../pageElements/loader/loader';
import ExportModal from "../pageElements/ExportModal";

const Workspace = () => {
    // Loading state 
    const [isLoading, setIsLoading] = useState(true);
    const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'hero2', 'div2', 'table', 'footer']);
    const [modalState, setModalState] = useState(false);
    const [modalContent, setModalContent] = useState([...buildingBlocks]);

    const addBlocks = (tag, e) => {
        setBuildingBlocks([...buildingBlocks, tag]);
        setModalContent([...buildingBlocks, tag]);
        // Component added message
        e.target.lastChild.classList.remove('hidden');
        setTimeout(() => {
        e.target.lastChild.classList.add('hidden')
        }, 1500)
        
    }

    useEffect(() => {
        // Wait for some seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 9000);
      }, []);
    
    return  isLoading ?
    <Loader className=""/> :
    <>
        <div className="ws-container">
            <ExportModal changeModal={[modalState, setModalState]} modalContent={modalContent} />
            <Sidebar handleAdd={addBlocks} toggleModal={[modalState, setModalState]} />
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} toggleModal={[modalState, setModalState]} changeModal={setModalContent} />
        </div>
    </>
}

export default Workspace;
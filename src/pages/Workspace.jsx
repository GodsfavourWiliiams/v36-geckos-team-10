import { useEffect, useState } from "react";
import Builder from "../pageElements/workspace/Builder";
import Sidebar from "../pageElements/workspace/Sidebar";
import Loader from '../pageElements/loader/loader';
import ExportModal from "../pageElements/ExportModal";
import { toast } from "react-toastify";
import { ReactComponent as NoData } from "../assets/no_data.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";

const Workspace = () => {
  const [ user, loading ] = useAuthState(auth);
  const navigate = useNavigate();

    // Loading state 
    const [isLoading, setIsLoading] = useState(true);
    const [buildingBlocks, setBuildingBlocks] = useState(['nav', 'hero2', 'div2', 'table', 'footer']);
    const [modalState, setModalState] = useState(false);
    const [modalContent, setModalContent] = useState([...buildingBlocks]);

    const addBlocks = (tag) => {
        setBuildingBlocks([...buildingBlocks, tag]);
        setModalContent([...buildingBlocks, tag]);
        // Component added message
        toast.success(tag + " Successfully Added")
    }

    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/signin");
    })
    

    useEffect(() => {
 
        // Wait for some seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 6200);
      }, []);
    
    return  isLoading ?
    <Loader /> :
    <>
        <div className="ws-container">
            <ExportModal changeModal={[modalState, setModalState]} modalContent={modalContent} />
            <Sidebar handleAdd={addBlocks} toggleModal={[modalState, setModalState]} />
            {buildingBlocks.length === 0 ? 
                    <div className="ws-builder min-h-screen flex items-center justify-center">
                        <NoData className="-mt-24 w-auto px-8 " />123
                    </div>
                : 
            <Builder buildingBlocks={buildingBlocks} setBuildingBlocks={setBuildingBlocks} toggleModal={[modalState, setModalState]} changeModal={setModalContent} />
        }
        </div>
    </>
}

export default Workspace;
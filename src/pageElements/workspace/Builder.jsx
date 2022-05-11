import dragAndDrop from "../../features/dragAndDrop";
import { useEffect, useRef } from "react";
import BuilderComponent from "../../components/BuilderComponent";
import BtnStyled from "../../components/BtnStyled";

// component that contains workspace builder area
// builder components are added automatically by clicking the sidebar menu
const Builder = ({ buildingBlocks, setBuildingBlocks, changeModal, toggleModal }) => {
    let dragParent = useRef(null);
    useEffect(() => {
        //sends DOM element to the function
        dragAndDrop(dragParent, changeModal);
    }, [buildingBlocks, changeModal]);

    
    return (
        <>
            <main className="ws-builder h-full overflow-y-auto md:p-10 px-3 pt-10" ref={dragParent}>
                {/* this code returns the NoDATA image if the building blocks or builder space is empty */}
                {buildingBlocks.map((block, index) => 
                    <BuilderComponent 
                        key={index} 
                        tags={block}
                        id={index}
                        buildingBlocks={buildingBlocks}
                        setBuildingBlocks={setBuildingBlocks}
                        changeModal={changeModal}
                        />)}
            </main>
            <div className="md:hidden block">
                {/* this toogles the export modal on mobile view */}
                  <BtnStyled customStyle={`bg-indigo-600 fixed bottom-4 right-3 border border-transparent rounded-lg py-3 px-8  text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50 `} 
                  clickFunc={() => {toggleModal[1](!toggleModal[0])}} innerText='Export' />
                </div>
        </>
    );
}

export default Builder;
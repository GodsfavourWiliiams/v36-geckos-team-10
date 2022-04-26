import LandingPage from "./pages/LandingPage";
import Workspace from "./pages/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplatePicker from "./pages/TemplatePicker";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Error from "./assets/Forbidden.png"



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={ <SignIn/>} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/theme" element={<TemplatePicker/>} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path = "*" element={ <div className="flex flex-col justify-center items-center text-center text-red-500 "><img src={Error} alt="error" className="md:w-5/12 h-80 md:h-auto"/> Error Page note found</div> }/> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import NoPage from "./Pages/NoPage";
import Portfolio from "./Pages/Portfolio";
import GraphicDesign from "./Components/GraphicDesign";
import VideoEditing from "./Components/VideoEditing";
import WebDevelopment from "./Components/WebDevelopment";

function App() {
  return (
    <div>
      {/* Hi you all */}
      <Routes>
        <Route path="/" element={<Navigationbar/>}></Route>
        <Route path="Portfolio" element={<Portfolio/>} />
        <Route path="GraphicDesgining" element={<GraphicDesign />} />
        <Route path="VideoEditing" element={<VideoEditing />} />
        <Route path="Webdevelpment" element={<WebDevelopment />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </div>
  );
}
export default App;

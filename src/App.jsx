import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Header from "./components/header/Header";
import Images from "./components/images/Images";
import Features from "./components/features/Features";
import PhotoshopAI from "./components/photoshopAI/photoshopAI";
import CuttingEdge from "./components/cuttingEdge/CuttingEdge";
import AITools from "./components/aiTools/AITools";
import VariousStyle from "./components/variousStyle/VariousStyle";
import Generator from "./components/generator/Generator";

function App() {
  return (
    <>
      <div className="background1">
        <Navbar />
        <Header />
        <Images />
        <Features />
        <PhotoshopAI />
        <CuttingEdge />
        <AITools />
        <VariousStyle />
        <Generator />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meals from "./components/Meals";
import Cocktails from "./components/Cocktails";
import Potter from "./components/Potter";
import Banks from "./components/Banks";
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/potter" element={<Potter />} />
        <Route path="/banks" element={<Banks />} />
      </Routes>
    </Router>
  );
}

export default App;

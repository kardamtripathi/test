import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import LawyerList from "./Components/LawyerList";
import DisplayList from './Components/DisplayList'
import './App.css'
const App = () => {
  const categories = [
    "Lawyers",
    "Mediators",
    "Arbitrators",
    "Notaries",
    "Document Writers",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <Navbar />
      <DisplayList />
    </div>
  );
};

export default App;

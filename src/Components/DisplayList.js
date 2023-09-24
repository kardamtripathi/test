import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LawyerList from "./LawyerList";
import MediatorList from "./MediatorList";
import './DisplayList.css';
import ArbitratorList from "./ArbitratorList";
import NotariesList from "./NotariesList";
import DocumentWritersList from "./DocumentWritersList";
const DisplayList = () => {
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
      <div className="content">
        <Sidebar
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        {selectedCategory === "Lawyers" && (
          <LawyerList/>
        )}
        {selectedCategory === "Mediators" && (
          <MediatorList/>
        )}
        {selectedCategory === "Arbitrators" && (
          <ArbitratorList/>
        )}
        {selectedCategory === "Notaries" && (
          <NotariesList/>
        )}
        {selectedCategory === "Document Writers" && (
          <DocumentWritersList/>
        )}
      </div>
    </div>
  );
};

export default DisplayList;

import React, { useState, useEffect } from "react";
import { lawyersData } from "../Data/Lawyers";

const LawyerList = () => {
  const [lawyer, setLawyer] = useState(lawyersData);
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const sortByRating = () => {
    const sortedLawyers = [...lawyer].sort((a, b) => b.rating - a.rating);
    setLawyer(sortedLawyers);
  };

  

  return (
    <div className="list">
      <input className="searchInput" placeholder="Search by Name" onChange={(e) => setSearchName(e.target.value)} />
      <input className="searchInput" placeholder="Search by Location" onChange={(e) => setSearchLocation(e.target.value)} />
      <button onClick={sortByRating}>Sort by Rating</button>
      <ul>
        {lawyer.filter((item) => {
          return (searchName.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchName)) && 
          (searchLocation.toLowerCase() === '' ? item : item.location.toLowerCase().includes(searchLocation))
        }).map((lawyer) => (
          <li key={lawyer.id}>
            <img src={lawyer.avatar} alt={`${lawyer.name}'s avatar`} />
            <div>
              <h3>{lawyer.name}</h3>
              <span>Rating: {lawyer.rating}/5</span>
              <span>Location: {lawyer.location}</span>
              <p>About: {lawyer.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerList;

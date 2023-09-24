import React, { useState } from "react";
import {documentWritersData} from "../Data/Lawyers";

const DocumentWritersList = () => {
  const [docWriters, setDocWriters] = useState(documentWritersData);
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const sortByRating = () => {
    const sortedDocWriters = [...docWriters].sort((a, b) => b.rating - a.rating);
    setDocWriters(sortedDocWriters);
  };

  return (
    <div className="list">
      <input className="searchInput" placeholder="Search by Name" onChange={(e) => setSearchName(e.target.value)} />
      <input className="searchInput" placeholder="Search by Location" onChange={(e) => setSearchLocation(e.target.value)} />
      <button onClick={sortByRating}>Sort by Rating</button>
      <ul>
        {docWriters.filter((item) => {
          return (searchName.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchName)) && 
          (searchLocation.toLowerCase() === '' ? item : item.location.toLowerCase().includes(searchLocation))
        }).map((m) => (
          <li key={m.id}>
            <img src={m.avatar} alt={`${m.name}'s avatar`} />
            <div>
              <h3>{m.name}</h3>
              <span>Rating: {m.rating}/5</span>
              <span>Location: {m.location}</span>
              <p>About: {m.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentWritersList;
import React, { useState, useEffect } from "react";
import { mediatorsData } from "../Data/Lawyers";

const MediatorList = ({ searchText, location }) => {
  const [mediator, setMediator] = useState(mediatorsData);
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const sortByRating = () => {
    const sortedMediators = [...mediator].sort((a, b) => b.rating - a.rating);
    setMediator(sortedMediators);
  };

  return (
    <div className="list">
      <input className="searchInput" placeholder="Search by Name" onChange={(e) => setSearchName(e.target.value)} />
      <input className="searchInput" placeholder="Search by Location" onChange={(e) => setSearchLocation(e.target.value)} />
      <button onClick={sortByRating}>Sort by Rating</button>
      <ul>
        {mediator.filter((item) => {
          return (searchName.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchName)) && 
          (searchLocation.toLowerCase() === '' ? item : item.location.toLowerCase().includes(searchLocation))
        }).map((mediator) => (
          <li key={mediator.id}>
            <img src={mediator.avatar} alt={`${mediator.name}'s avatar`} />
            <div>
              <h3>{mediator.name}</h3>
              <span>Rating: {mediator.rating}/5</span>
              <span>Location: {mediator.location}</span>
              <p>About: {mediator.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediatorList;

import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (category) => {
    onSelectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <aside>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => {
              handleChange(category);
            }}
            style={{ backgroundColor: selectedCategory === category ? "blue" : "transparent", color: selectedCategory === category ? "white" : "black"}}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

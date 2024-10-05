import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Icons for collapse/expand
import styles from "./SidebarMain.module.css"; // Styles for additional customizations

export default function SidebarMain() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-screen bg-indigo-500 text-white fixed top-0 left-0 ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 focus:outline-none bg-indigo-700 hover:bg-indigo-800"
      >
        {isExpanded ? (
          <FiChevronLeft size={24} />
        ) : (
          <FiChevronRight size={24} />
        )}
      </button>

      {/* Profile Section */}
      <div className="flex items-center justify-center my-6">
        <img
          src="https://via.placeholder.com/100" // Replace with actual profile image
          alt="Profile"
          className="rounded-full w-16 h-16"
        />
        {isExpanded && (
          <div className="ml-3">
            <p className="text-lg">Hi, John</p>
          </div>
        )}
      </div>

      {/* Sorting Options */}
      <div className="px-4 mt-4">
        {isExpanded && <p className="font-semibold">Sort By:</p>}
        <ul>
          <li className="py-2 hover:bg-indigo-600 rounded-lg cursor-pointer">
            {isExpanded ? "Price - Low to High" : "P"}
          </li>
          <li className="py-2 hover:bg-indigo-600 rounded-lg cursor-pointer">
            {isExpanded ? "Price - High to Low" : "P"}
          </li>
          <li className="py-2 hover:bg-indigo-600 rounded-lg cursor-pointer">
            {isExpanded ? "Most Popular" : "M"}
          </li>
          <li className="py-2 hover:bg-indigo-600 rounded-lg cursor-pointer">
            {isExpanded ? "New Arrivals" : "N"}
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./Search.css";
import { loading } from "../../assets";

const Search = ({ className }) => {
  return (
    <div className={`generating-container ${className || ""}`}>
      <img className="loading-icon" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Search;

import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-panel">
      {results && results.length > 0 ? (
        <ul>
          {results.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

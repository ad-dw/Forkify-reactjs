import "./SearchResults.styles.css";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-panel">
      {results && results.length > 0 ? (
        <ul>
          {results.map((item, idx) => (
            <li key={idx} className="search-result-item">
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

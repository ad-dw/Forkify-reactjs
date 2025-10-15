import "./Spinner.styles.css";

function Spinner({ className }) {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="spinner" aria-label="loading" role="progressbar"></div>
    </div>
  );
}

export default Spinner;

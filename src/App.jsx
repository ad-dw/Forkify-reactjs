import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar.component";

function App() {
  return (
    <div className="app-container p-4 sm:p-6 md:p-8">
      <div className="app">
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;

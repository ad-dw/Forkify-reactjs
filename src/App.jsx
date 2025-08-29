import { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar.component";
import RecipeView from "./components/RecipeView/RecipeView.component";
import { Axios, AxiosResponseInterceptor } from "./configuration/axios";

function App() {
  useEffect(() => {
    return () => {
      Axios.interceptors.response.eject(AxiosResponseInterceptor);
    };
  }, []);

  return (
    <div className="app-container p-4 sm:p-6 md:p-8">
      <div className="app">
        <NavigationBar />
        <RecipeView />
      </div>
    </div>
  );
}

export default App;

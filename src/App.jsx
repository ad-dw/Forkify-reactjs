import { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar.component";
import RecipeView from "./components/RecipeView/RecipeView.component";
import {
  Axios,
  AxiosResponseInterceptor,
  // AxiosRequestInterceptor,
} from "./configuration/axios";

function App() {
  useEffect(() => {
    return () => {
      // Axios.interceptors.request.eject(AxiosRequestInterceptor);
      Axios.interceptors.response.eject(AxiosResponseInterceptor);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="app" id="app">
        <NavigationBar />
        <RecipeView />
      </div>
    </div>
  );
}

export default App;

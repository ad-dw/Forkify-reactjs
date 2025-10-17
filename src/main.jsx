import "./polyfills.js";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Spinner from "./components/Spinner/Spinner.component.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
    <ToastContainer transition={Slide} />
  </StrictMode>
);

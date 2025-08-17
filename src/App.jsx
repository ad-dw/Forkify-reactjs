import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Camera } from "lucide-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Aditya</p>
      <Camera color="red" size={48} />;
    </>
  );
}

export default App;

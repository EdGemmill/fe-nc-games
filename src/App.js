import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<div>404 : not found</div>} />
      </Routes>
    </div>
  );
}

export default App;

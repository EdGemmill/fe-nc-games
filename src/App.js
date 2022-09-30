import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Heading from "./components/Heading";
import ReviewsPage from "./components/ReviewsPage.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:urlEnd" element={<ReviewsPage />} />
        <Route path="*" element={<div>404 : not found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import InfoPage from "./components/pages/InfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:cityName" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

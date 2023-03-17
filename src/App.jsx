import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import CharityPage from "./pages/CharityPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:charityId" element={<CharityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

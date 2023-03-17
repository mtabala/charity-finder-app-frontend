import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import CharityPage from "./pages/CharityPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:charityId" element={<CharityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

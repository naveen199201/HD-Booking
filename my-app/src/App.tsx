import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import Checkout from "./pages/Checkout";
import ConfirmPage from "./pages/ConfirmPage";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 shadow-md">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<MainPage searchTerm={searchTerm} />} />
        <Route path="/details/:id" element={<CardDetailsPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/checkout" element={<Checkout
        experience="Kayaking"
        date="2025-10-22"
        time="09:00 am"
        price={899}
      />} />
        
        {/* optional: <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;

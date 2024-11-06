import React from "react";
import Footer from "./components/footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Roadmap from "./pages/roadmap";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

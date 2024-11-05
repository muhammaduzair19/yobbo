import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Visuals from "./components/visuals";
import WhenBanner from "./components/when-banner";
import Community from "./components/community";

const App = () => {
    return (
        <div className="w-full min-h-screen bg-[#C4BDA5] overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Visuals />
            <WhenBanner />
            <Community />
        </div>
    );
};

export default App;

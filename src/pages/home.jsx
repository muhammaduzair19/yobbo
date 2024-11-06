import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Visuals from "../components/visuals";
import WhenBanner from "../components/when-banner";
import Community from "../components/community";
import Faqs from "../components/faqs";

const Home = () => {
    return (
        <main className="w-full min-h-screen bg-[#C4BDA5] overflow-hidden">
            <Hero />
            <About />
            <Visuals />
            <WhenBanner />
            <Community />
            <Faqs />
        </main>
    );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const Visuals = () => {
    const navigate = useNavigate()
    return (
        <section className="w-full min-h-screen">
            <div className="px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
                <div className="w-full h-full ">
                    <img
                        className="object-contain"
                        src="/images/visual.svg"
                        alt="Visual Image"
                    />
                </div>
                <div className="flex flex-col gap-20 md:flex-row justify-between  items-center mt-10">
                    <div className="w-full md:max-w-1/2 lg:max-w-[900px]">
                        <div className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
                            <h2 className="font-black text-2xl md:text-3xl lg:text-5xl">
                                TOTALLY RANDOM!
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                                Every YOBBO begins with the choice of a class,
                                after which the characteristics suitable for
                                that class are iterated. To make sure the data
                                is unique, it is then compared to every other
                                YOBBO that currently exists
                            </p>
                        </div>
                        <button onClick={() => {
    navigate("/roadmap");
    window.scrollTo(0, 0); // Scrolls to the top
}} className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base mt-5">
                            Buy YOBBO
                        </button>
                    </div>
                    <div className="w-full md:max-w-[500px]">
                      <img src="/images/character2.svg" alt="Character" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visuals;

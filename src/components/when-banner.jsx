import React from "react";
import { useNavigate } from "react-router-dom";

const WhenBanner = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full bg-[#C7C2B5]">
            <div className="px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10 flex items-center gap-10">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src="/images/rocket.svg" alt="Rocket" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
                    <h2 className="font-black text-2xl md:text-3xl lg:text-5xl">
                        When YOBBO?
                    </h2>
                    <p className="font-bold text-lg text-wrap md:text-xl lg:text-2xl xl:text-3xl">
                        The drop will be at 3 PM PST on Tuesday, February 8th
                    </p>
                    <button
                        onClick={() => {
                            navigate("/roadmap");
                            window.scrollTo(0, 0); 
                        }}
                        className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base"
                    >
                        Buy YOBBO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhenBanner;

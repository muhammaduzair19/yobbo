import React from "react";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate()
    return (
        <section className="w-full  min-h-screen">
            <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
                <div className="flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
                        <p className="text-gray-600 font-light tracking-wider">
                            COMMUNITY
                        </p>
                        <h2 className="font-black text-2xl md:text-3xl lg:text-5xl">
                            JOIN OUR DISCORD
                        </h2>
                        <p className="font-medium text-xl md:text-2xl ">
                            Show Off Your <strong>YOBBO</strong> and Receive a
                            Unique <strong>YOBBO</strong> Experience
                        </p>
                        <button className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base">
                            Join our Community
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-9 relative">
                        <div className="flex gap-10">
                            <div className="flex h-96 md:h-[500px] flex-col items-center justify-between">
                                <span className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-[#FCCB25] rounded-lg">
                                    <img
                                        src="/images/people1.svg"
                                        alt="person"
                                        className="bg-blend-color-dodge"
                                    />
                                </span>
                                <span className="w-16 md:w-28">
                                    <img src="/images/discord1.svg" alt="Discord Logo" />
                                </span>
                                <span className="flex gap-10 relative">
                                    <span className="w-16 md:w-28 absolute -left-20 md:-left-32">
                                        <img
                                            src="/images/discord2.svg"
                                            alt="Discord Logo"
                                        />
                                    </span>

                                    <span className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-[#EF902D] rounded-lg">
                                        <img src="/images/people2.svg" alt="Person" />
                                    </span>
                                </span>
                            </div>
                            <div className="flex h-96 md:h-[500px] flex-col items-center justify-between mt-28">
                                <span className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-[#79CBEE] rounded-lg">
                                    <img
                                        src="/images/people3.svg"
                                        alt="Person"
                                        className="bg-blend-color-dodge"
                                    />
                                </span>

                                <span className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-[#FCCB25] rounded-lg">
                                    <img src="/images/people4.svg" alt="Person" />
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-10 sm:bottom-5 md:bottom-0">
                            <img
                                className="w-72 md:w-80 lg:w-96 "
                                src="/images/guy.svg"
                                alt="Character"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-16">
                    <div className="flex flex-col text-center items-center mb-10 gap-3">
                        <p className="uppercase text-green-500 font-black max-md:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            8th February
                        </p>
                        <p className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tighter">
                            INAUGURAL SERIES
                        </p>
                        <p className="text-sm md:text-base">
                            Our First Drop is inspired by the first game on our
                            platform - <strong>YOBBO</strong>!
                        </p>
                        <button
                            onClick={() => {
    navigate("/roadmap");
    window.scrollTo(0, 0); // Scrolls to the top
}}
                            className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base"
                        >
                            Buy YOBBO
                        </button>
                    </div>
                    <div>
                        <img src="/images/character-3.svg" alt="Character" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;

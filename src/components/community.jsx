import React from "react";

const Community = () => {
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
                            Show Off Your{" "}
                            <span className="font-bold">YOBBO</span> and Receive
                            a Unique <span className="font-bold">YOBBO</span>{" "}
                            Experience
                        </p>
                        <button className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base">
                            Join our Community
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="flex gap-10">
                            <div className="flex flex-col items-center gap-6">
                                <span className="w-28 h-28 md:w-44 md:h-44 bg-orange-600 rounded-lg">
                                    <img
                                        src="/images/people1.svg"
                                        alt=""
                                        className="bg-blend-color-dodge"
                                    />
                                </span>
                                <span className="w-28">
                                    <img src="/images/discord1.svg" alt="" />
                                </span>
                                <span className="flex gap-10 relative">
                                    <span className="w-16 md:w-28 absolute -left-20">
                                        <img
                                            src="/images/discord2.svg"
                                            alt=""
                                        />
                                    </span>

                                    <span className="w-28 h-28 md:w-44 md:h-44 bg-orange-600 rounded-lg">
                                        <img src="/images/people2.svg" alt="" />
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-6 justify-between mt-28">
                                <span className="w-28 h-28 md:w-44 md:h-44 bg-orange-600 rounded-lg">
                                    <img
                                        src="/images/people1.svg"
                                        alt=""
                                        className="bg-blend-color-dodge"
                                    />
                                </span>
                                <span className="w-28">
                                    <img src="/images/discord1.svg" alt="" />
                                </span>
                                <span className="w-28 h-28 md:w-44 md:h-44 bg-orange-600 rounded-lg">
                                    <img src="/images/people2.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;

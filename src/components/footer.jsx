import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black">
            <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10 text-white">
                <div className="flex  justify-between gap-5 flex-wrap max-sm:flex-col md:grid grid-cols-[3fr_5fr_2fr_2fr] ">
                    <div>
                        <img
                            className="w-32 sm:w-44 md:w-52 lg:w-64 xl:w-72"
                            src="/images/logo-yobbo.svg"
                            alt=""
                        />
                        <p className="uppercase font-bold text-sm md:text-lg lg:text-xl xl:text-2xl mt-2 md:mt-4 mx-2 md:mx-4 tracking-tighter ">
                            POWERED BY YOBBO
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 font-bold  md:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight">
                            Get the Latest News
                        </p>
                        <div className="text-white rounded-md overflow-hidden flex flex-col gap-3">
                            <div className="w-full flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-2 py-3 border border-yellow-300 bg-transparent rounded-md w-2/3 md:w-1/2 focus:outline-none focus:border-yellow-500"
                                    aria-label="Email"
                                />
                                <button className="px-4 py-3 bg-green-500 border border-green-500 text-white hover:bg-black transition duration-300 rounded-md -ml-2">
                                    Sign Up
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="font-thin text-xs md:text-sm lg:text-base">
                                    I accept{" "}
                                    <strong>Terms and Conditions</strong> and{" "}
                                    <strong>Privacy Policy</strong>
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="font-thin text-xs md:text-sm lg:text-base">
                                    I agree to receive Promotional Materials
                                    from <strong>YOBBO</strong> AND I understand
                                    that I can withdraw my consent at anyime.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 font-bold  md:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight">
                            Resources
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl tracking-tighter ">
                            Contact Us
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl mt-3 tracking-tighter ">
                            FAQ
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 font-bold  md:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight">
                            Social Media
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl tracking-tighter ">
                            Twitter
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl mt-3 tracking-tighter ">
                            Instagram
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl mt-3 tracking-tighter ">
                            Youtube
                        </p>
                        <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl mt-3 tracking-tighter ">
                            Discord
                        </p>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex justify-between w-full flex-col md:flex-row gap-5 text-base md:text-lg">
                    <p className="uppercase">
                        &copy;2024 | All rights reserved
                    </p>
                    <p className="uppercase underline">
                        terms and condition | privacy policy
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

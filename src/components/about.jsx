import { ArrowDownCircle } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full min-h-screen">
            <div className="">
                <div className="w-full bg-[#C7C2B5] flex items-center justify-center">
                    <img src="/images/cube.svg" alt="" className="" />
                </div>
                <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
                    <div className="flex flex-col gap-20 md:flex-row justify-between  items-center">
                        <div className="w-full md:max-w-1/2 lg:max-w-[900px]">
                            <div className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
                                <h2 className="font-black text-2xl md:text-3xl lg:text-5xl">
                                    What is YOBBO?
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                                    YOBBO is a collection of 7000 distinct 3d
                                    voxel characters that exist on the Ethereum
                                    Blockchain. YOBBO holders can take part in
                                    activities like NFT claims,
                                    raffles,community giveaways and Play-to-Earn
                                    rewards using their unique ERC721 characters
                                    and more. Keep in mind,all YOBBO s are
                                    awsome, but some are just cooler than the
                                    rest.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-6 lg:mt-8">
                                <p className="font-normal text-xl md:text-2xl lg:text-3xl mb-3 md:mb-5">
                                    What is Included?
                                </p>
                                <span className="bg-white md:text-lg py-2 px-5 rounded-full border border-black">
                                    STATIC PNG
                                </span>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[500px] bg-white rounded-lg shadow-md ">
                            <div className="w-full  flex flex-col min-h-96 flex-shrink-0 ">
                                <div className="flex items-center px-4 py-9  md:py-16 w-full  flex-col border-b-2 border-gray-400">
                                    <p className="text-lg md:text-xl font-bold tracking-widest">
                                        STARTS IN
                                    </p>
                                    <span className="flex gap-3">
                                        <p className="flex flex-col">
                                            <span className="text-green-600 text-5xl  lg:text-6xl  font-extrabold">
                                                00
                                            </span>
                                            <span className="text-sm font-medium text-center">
                                                HRS
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-green-600 text-5xl  lg:text-6xl font-extrabold">
                                                : 00 :
                                            </span>
                                            <span className="text-sm font-medium text-center">
                                                MINS
                                            </span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-green-600 text-5xl  lg:text-6xl  font-extrabold">
                                                45
                                            </span>
                                            <span className="text-sm font-medium text-center">
                                                SECS
                                            </span>
                                        </p>
                                    </span>
                                </div>
                                <div className="px-4 py-9  md:py-16 md:px-10">
                                    <div className="flex  flex-col md:flex-row gap-10 justify-between w-full">
                                        <p className="flex flex-col items-center">
                                            <span className="text-sm font-medium">
                                                PRICE PER YOBBO
                                            </span>
                                            <span className="text-green-600 text-4xl lg:text-5xl   font-extrabold">
                                                0.037 ETH
                                            </span>
                                        </p>
                                        <p className="flex flex-col items-center">
                                            <span className="text-sm font-medium">
                                                YOBBO REMAINING
                                            </span>
                                            <span className="text-green-600 text-4xl lg:text-5xl   font-extrabold flex items-center">
                                                7000{" "}
                                                <ArrowDownCircle className="ml-2 text-red-600" />
                                            </span>
                                            <span className="text-red-600 text-sm  font-medium">
                                                0 YOBBO SOLD
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 pb-4 md:px-10">
                                    <button
                                        onClick={() => {
    navigate("/roadmap");
    window.scrollTo(0, 0); // Scrolls to the top
}}
                                        className="w-full bg-green-600 text-white px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base mt-10"
                                    >
                                        Buy YOBBO
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutSectionOne />
                <AboutSectionTwo />
                <AboutSectionThree />
                <AboutSectionFour />
                <AboutSectionFive />
            </div>
        </section>
    );
};

export default About;

const AboutSectionOne = () => {
    return (
        <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
            <div>
                <div className="md:w-[600px]">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                        Each of your distinct NFT characters has a distinct
                        appearance, occupation, and personality You can own,
                        trade, play, and make money with them
                    </p>
                </div>
                <div className="relative mt-20">
                    <div className="w-full flex items-center justify-center">
                        <img
                            className=" object-contain w-full h-full"
                            src="/images/cloud1.svg"
                            alt=""
                        />
                    </div>
                    <div className=" w-full absolute top-0 sm:top-10 md:top-12 left-[30%] sm:left-[33%] md:left-[35%]">
                        <img
                            className="w-28 sm:w-48 md:w-52 lg:w-64 xl:w-80"
                            src="/images/character.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSectionTwo = () => {
    return (
        <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
            <div className="w-full">
                <div className="w-full flex items-end justify-end">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl self-end md:w-[600px]">
                        Each <strong>YOBBO</strong> is a unique{" "}
                        <strong>ERC 721</strong> with randomized qualities that
                        reflect their character. The inaugural series will only
                        include 7,000 characters
                    </p>
                </div>
                <div className="relative mt-20">
                    <div className="w-full flex items-center justify-center">
                        <img
                            className="object-contain w-full h-full"
                            src="/images/cloud2.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute top-0  md:top-12 right-[8%] sm:right-[12%] md:right-[15%] lg:right-[20%]">
                        <img
                            className="w-16 sm:w-28 md:w-44 lg:w-52"
                            src="/images/bird.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="md:w-[600px] max-sm:mt-5">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                        For <strong>0.037 ETH</strong>, anyone may buy a YOBBO.
                        Once all of the YOBBO have been sold, rarities will
                        begin to disclosed
                    </p>
                </div>
            </div>
        </div>
    );
};
const AboutSectionThree = () => {
    return (
        <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
            <div className="w-full">
                <div className="w-full flex items-end justify-end">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl self-end md:w-[600px]">
                        <strong>YOBBO</strong> will be playable characters in
                        YOBBOVERSE. There are also other utilities, such as
                        in-game advantages in <strong>YOBBO</strong>.
                    </p>
                </div>
                <div className="relative mt-20">
                    <div className="w-full flex items-center justify-center overflow-hidden">
                        <img
                            className=" object-contain w-full h-full"
                            src="/images/cloud3.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute top-4 sm:top-1/2 md:top-1/3 left-0">
                        <img
                            className="w-28 sm:w-52 md:w-72 lg:w-72 xl:w-96"
                            src="/images/dragon.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSectionFour = () => {
    return (
        <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
            <div className="w-full flex flex-col gap-10">
                <div className="md:w-[600px] max-sm:mt-5">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                        Creation of <strong>YOBBO</strong> aims to have the
                        finest community possible. So we wanted to make a
                        character series that our community could accept and use
                    </p>
                </div>
                <div className="w-full flex items-end justify-end">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl self-end md:w-[600px]">
                        Official Merch Store Will Be Released to All Current
                        hodlers with Access to Hight-Quality Merch Related To
                        <strong>YOBBO</strong> Brand
                    </p>
                </div>
                <div className="md:w-[600px] max-sm:mt-5">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                        The coolest part is that you may play with your{" "}
                        <strong>YOBBO</strong>
                        and earn <strong>YOBBO</strong> coin by staking it. How
                        infrequent they are and how frequently you play have a
                        direct impact on the amount
                    </p>
                </div>
            </div>
        </div>
    );
};

const AboutSectionFive = () => {
    return (
        <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
            <div className="w-full">
                <div className="relative">
                    <div className="w-full flex items-center justify-center overflow-hidden">
                        <img
                            className=" object-contain w-full h-full"
                            src="/images/cloud4.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute left-1/2 top-1/3  -translate-x-1/2 -translate-y-1/2">
                        <img
                            className="w-10 ml-12 sm:ml-20 md:ml-36 sm:w-16 md:w-24 lg:w-44"
                            src="/images/sword.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

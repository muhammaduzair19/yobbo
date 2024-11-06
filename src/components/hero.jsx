import { Maximize, Volume2, VolumeIcon } from "lucide-react";
import React from "react";

const Hero = () => {
    return (
        <section className="w-full min-h-[calc(100vh - 4rem)] flex flex-col gap-10">
            <div className="w-full max-md:h-1/2 h-screen flex items-center flex-col md:justify-center">
                <div className="md:-mt-32 max-sm:mt-10">
                    <img
                        className="w-72 md:w-[500px]"
                        src="/images/logo-yobbo.svg"
                        alt=""
                    />
                </div>
                <div className="h-96 overflow-hidden max-sm:-mt-20 ">
                    <img className="h-96" src="/images/hero-char.svg" alt="" />
                </div>
                <div className="flex flex-col gap-5 items-center max-sm:-mt-20 md:mt-0 justify-center px-4">
                    <p className="font-pixelify text-2xl md:text-4xl font-bold text-center">
                        CHARACTERS THAT ARE PLAYABLE IN - GAME
                    </p>
                    <p className="text-sm md:text-base">
                        The lovable New collectible series Of YOBBO
                    </p>
                    <button className="bg-green-600 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base">
                        Buy YOBBO
                    </button>
                </div>
            </div>
            <div className="w-full relative max-md:h-[30vh]">
                <div className="absolute z-20 inset-0 bg-gradient-to-t from-gray-950/65 to-gray-200/5 flex items-end px-4 md:px-6">
                    <div className="flex justify-between w-full items-center gap-2 mb-3">
                        <Volume2 className="w-5 sm:w-7 md:w-12 h-5 sm:h-7 md:h-12 text-white font-bold" />
                        <span className="w-full bg-white py-1 md:py-2 rounded-full" />
                        <Maximize className="w-5 sm:w-7 md:w-12 h-5 sm:h-7 md:h-12 text-white font-bold" />
                    </div>
                </div>
                <img
                    className="h-full w-full object-cover bg-center"
                    src="/images/hero-video.svg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Hero;

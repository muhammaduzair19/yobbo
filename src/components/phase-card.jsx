// PhaseCard.js
import React from "react";

const PhaseCard = ({ phase, title, description }) => {
    return (
        <div className="bg-[#E5DDCF] rounded-xl px-6 py-8 w-full flex flex-col gap-4 shadow-lg ">
            <h2 className="text-green-600 font-bold text-xl font-pixelify md:text-2xl lg:text-3xl xl:text-4xl">
                {phase}
            </h2>
            <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl">
                {title}
            </h3>
            <ul className="text-black space-y-2 list-none list-inside flex flex-col gap-2 mt-2 sm:gap-3 sm:mt-3 md:gap-4 md:mt-4 ">
                {description.map((item, index) => (
                    <li className="flex gap-2 px-3 py-2" key={index}>
                        <span className="w-0.5 h-0.5 bg-black rounded-full p-[3px] mt-2 " />
                        <p className="text-sm md:text-base lg:text-lg">{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhaseCard;

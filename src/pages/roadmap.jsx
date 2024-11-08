import React from "react";
import PhaseCard from "../components/phase-card";
// phasesData.js
export const phasesData = [
    {
        phase: "Phase 1",
        title: "LAUNCHING THE COLLECTION",
        description: [
            "Launch discord and website.",
            "Reward the growing community with giveaways including ETH, NFT, and special roles within the community with whitelisting benefits.",
            "Launch the collection of 7000 YOBBO into the Metaverse on FEBRUARY 8TH.",
        ],
    },
    {
        phase: "Phase 2",
        title: "COMMUNITY & CONNECTION",
        description: [
            "Enable our DAO system that will allow holders of the project to have voting power on all major decisions coming to the project via snapshot.",
            "Current holders will be rewarded with exclusive airdrops including additional YOBBO and ETH.",
            "Minting rewards will be deployed.",
            "Official Merch Store will be released to all current holders with access to high-quality merch related to the YOBBO brand.",
        ],
    },
    {
        phase: "Phase 3",
        title: "PUBLIC SERVICE",
        description: [
            "Creation of the (Yobbolabs) company. Expanding the team with more people!",
            "Activate and fund the community and charity wallet. (The DAO system will be used to decide upon which charities will be considered).",
            "First IRL meet up.",
            "Merch store is released to the public (limited designs and quantity).",
            "Production of 3D prints with high-quality materials. Exclusively for the holders.",
        ],
    },
    {
        phase: "Phase 4",
        title: "YOBBO TOWN",
        description: [
            "The Metaverse action begins! DAO voting starts construction of YOBBO town in the Metaverse (buying land on DAO desired platform).",
            "Holders will begin to receive $YOBBO Coin for the amount of holding time.",
            "Airdrop to all holders (tier-based & Metaverse ready).",
            "Metaverse is launched and the constitution of YOBBO town is curated in a Metaverse meet up.",
        ],
    },
];

const Roadmap = () => {
    return (
        <main className="w-full min-h-screen bg-[#C4BDA5] overflow-hidden">
            <section className="w-full min-h-[calc(100vh - 4rem)] flex flex-col gap-10">
                <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
                    <div className="w-full max-md:h-1/2 h-screen flex items-center flex-col md:justify-center">
                        <div className="md:-mt-32 max-sm:mt-10">
                            <img
                                className="w-72 md:w-[500px]"
                                src="/images/roadmap.svg"
                                alt="Roadmap Image"
                            />
                        </div>
                        <div className=" overflow-hidden max-sm:-mt-20 ">
                            <img
                                className="h-96"
                                src="/images/hero-char.svg"
                                alt="Characters"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[3fr_3fr_3fr_3fr] gap-4 md:-mt-44 mb-10 ">
                        {phasesData.map((phase, index) => (
                            <PhaseCard
                                key={index}
                                phase={phase.phase}
                                title={phase.title}
                                description={phase.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Roadmap;

import React from "react";
import FaqCard from "./faq-card";

const faqs = [
    {
        id: 1,
        question: "WHAT IS A YOBBO?",
        Answer: () => (
            <>
                <strong className="font-bold">YOBBO</strong> is a collection of
                7000 distinct 3D voxel Characters that exist on the Ethereum
                Blockchain. YOBBO holders can take part in special activities
                like NFT claims, raffles, community giveaways, and play to earn
                rewards using their unique ERC721 Characters and more. Keep in
                mind, all YOBBO are awesome, but some are just cooler than the
                rest.
            </>
        ),
    },
    {
        id: 2,
        question: "WHAT IS AN NFT?",
        Answer: () => (
            <>
                A non-fungible token (NFT) is a unique digital identity stored
                on a blockchain and used to verify ownership and authenticity.
                It cannot be copied, substituted, or divided. The ownership of
                an NFT is recorded on the blockchain and may be transferred by
                the owner, allowing NFTs to be sold and traded.
            </>
        ),
    },
    {
        id: 3,
        question: "WHAT IS A YOBBO BUILT ON?",
        Answer: () => (
            <>
                <strong className="font-bold">YOBBO</strong> are created and
                exist on the Ethereum blockchain as ERC-721 collectibles, which
                can be held in an Ethereum wallet such as MetaMask.
            </>
        ),
    },
    {
        id: 4,
        question: "DOES YOBBO HAVE UTILITY?",
        Answer: () => (
            <>
                Yes, <strong className="font-bold">YOBBO</strong> are intended
                to have several utilities. That means they’ll serve a purpose
                beyond being cute Souls to own and animate. YOBBO will be
                playable characters in <strong>YOBBOVERSE</strong>. There are
                also other utilities, such as in-game advantages in YOBBO.
            </>
        ),
    },
    {
        id: 5,
        question: "WHAT IS YOBBO COIN?",
        Answer: () => (
            <>
                In <strong>YOBBOVERSE</strong>, users buy, breed, and battle
                monsters known as <strong>YOBBO coins</strong> to win in-game
                currency known as little love potions, which may be changed into
                real money. It adheres to the Play-to-earn business model.
            </>
        ),
    },
    {
        id: 6,
        question: "DOES THE RARITY MATTER?",
        Answer: () => (
            <>
                Every <strong>YOBBO</strong> is unique, both in terms of
                metadata and appearance. However, certain YOBBO are far more
                rare than others. When it comes to YOBBO coin, the rarer the
                YOBBO, the higher the potential payout.
            </>
        ),
    },
    {
        id: 7,
        question: "HOW ARE THEIR TRAITS PROVABLY RANDOMLY GENERATED?",
        Answer: () => (
            <>
                Each <strong>YOBBO</strong> begins with the selection of a
                class, and then iteratively selects the qualities suited for
                that class from the available alternatives. The data is then
                compared to all other YOBBO to confirm its uniqueness.
            </>
        ),
    },
    {
        id: 8,
        question: "HOW ARE THEY PROVABLY RANDOMLY DISTRIBUTED?",
        Answer: () => (
            <>
                The YOBBO contract has a Provenance Hash, which is a SHA-256
                calculated from all YOBBO metadata, models, and images prior to
                generation.
            </>
        ),
    },
    {
        id: 9,
        question: "IS THIS THE ONLY EVER YOBBO DROP?",
        Answer: () => <>The YOBBO series is the first release.</>,
    },
    {
        id: 10,
        question: "WILL ANY MORE INFORMATION BE RELEASED BEFORE LAUNCH?",
        Answer: () => <>Join our Discord for updates.</>,
    },
    {
        id: 11,
        question: "WHY HAVE YOBBO CREATED?",
        Answer: () => (
            <>
                Because, simply said, <strong>YOBBO</strong> app aims to have
                the finest community possible.
            </>
        ),
    },
    {
        id: 12,
        question: "HOW MANY YOBBO WILL THERE BE?",
        Answer: () => <>There will be 7,000 YOBBO in the initial drop.</>,
    },
    {
        id: 13,
        question: "HOW WILL I KNOW HOW RARE IS MY YOBBO IS?",
        Answer: () => (
            <>
                Soon after your <strong>YOBBO</strong> is revealed, you can see
                how rare your YOBBO traits are by using the ranking tools at{" "}
                <a
                    className="underline font-bold"
                    href="https://rarity.tools"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://rarity.tools
                </a>
                .
            </>
        ),
    },
];

const Faqs = () => {
    return (
        <section className="w-full min-h-screen bg-[#C7C2B5]">
            <div className="w-full h-full px-7 py-8 md:px-10 lg:px-16 lg:py-16 md:py-10">
                <div className="flex flex-col gap-4">
                    <div className="py-2 md:py-3 xl:py-5 border-b-[0.5px] border-gray-800">
                        <h2 className="font-black text-xl md:text-2xl lg:text-3xl">
                            FAQS
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        {faqs?.map((faq) => (
                            <FaqCard key={faq.id} faq={faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;

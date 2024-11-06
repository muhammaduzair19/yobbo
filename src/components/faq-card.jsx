import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FaqCard = ({ faq }) => {
    const [questionsOpen, setQuestionsOpen] = useState([]);
    const QuestionsOpenHandler = (id) => {
        if (questionsOpen.includes(id)) {
            const arr = questionsOpen?.filter((q) => q !== id);
            setQuestionsOpen(arr);
        } else {
            setQuestionsOpen([...questionsOpen, id]);
        }
    };
    return (
        <div className="flex flex-col w-full gap-1" key={faq.id}>
            <div className="bg-[#C4BDA5]">
                <p
                    className=" p-2 md:p-3 xl:p-4 font-bold flex justify-between text-lg md:text-xl xl:text-2xl cursor-pointer"
                    onClick={() => QuestionsOpenHandler(faq.id)}
                >
                    <span>{faq.question}</span>
                    <button onClick={() => QuestionsOpenHandler(faq.id)}>
                        {questionsOpen.includes(faq.id) ? (
                            <ChevronUp
                                strokeWidth={2}
                                className="cursor-pointer"
                            />
                        ) : (
                            <ChevronDown
                                strokeWidth={2}
                                className="cursor-pointer"
                            />
                        )}
                    </button>
                </p>
            </div>
            <div
                className={`${
                    questionsOpen.includes(faq.id) ? "max-h-[500px]" : "max-h-0"
                } bg-[#C4BDA5] overflow-hidden  transition-all duration-500`}
            >
                <p className="text-base md:text-lg xl:text-xl p-2 md:p-3 xl:p-4">
                    {faq.Answer()}
                </p>
            </div>
        </div>
    );
};

export default FaqCard;

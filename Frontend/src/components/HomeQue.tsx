import { useState } from "react";
import { ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB.",
  },
  {
    question: "Do you work on both frontend and backend development?",
    answer:
      "Yes, I build full-stack applications with robust frontends and backends.",
  },
  {
    question: "Can you build responsive websites?",
    answer:
      "Absolutely! All projects are fully responsive for mobile, tablet, and desktop.",
  },
  {
    question: "How can I hire you for a project?",
    answer:
      "Reach out via my contact form, email, or LinkedIn. I respond within 24–48 hours.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, I provide ongoing support, updates, and performance optimizations for completed projects.",
  },
];

const HomeQue = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Frequently
        <br /> Asked <span className="text-[rgb(145,75,241)]">Questions</span>
      </h1>
      <div className="flex flex-col w-full h-full gap-[20px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${
              index > 3 && "max-xs:hidden"
            } rounded-lg bg-[rgb(39,40,41)] overflow-hidden`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="font-semibold text-[18px]">{item.question}</span>
              <span
                className={`font-bold transform transition-transform duration-300 ${
                  openIndex === index && "text-[rgb(145,75,241)] rotate-180"
                }`}
              >
                <ChevronUp size={18} />
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-[18px] text-[rgb(217,217,217)]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeQue;

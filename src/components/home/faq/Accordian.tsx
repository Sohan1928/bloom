import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

type AccordionItem = {
  question: string;
  answer: string;
};

const data: AccordionItem[] = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Startups, indie brands, bold entrepreneurs, and established businesses ready for a fresh season. If you’ve got an idea worth growing, we’re in.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope of the project. Contact us for a custom quote.",
  },
  {
    question: "Do you offer website development too?",
    answer: "Yes! We provide full-stack web development along with design.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4–6 weeks, depending on complexity.",
  },
  {
    question: "Can you work with my existing brand or site?",
    answer:
      "Absolutely! We can refresh, redesign, or expand on your existing brand.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just reach out to us via our contact form and we’ll guide you through the process.",
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-100 accordian-container">
      {data.map((item, index) => (
        <div key={index} className="accordian-content">
          <button
            onClick={() => toggle(index)}
            className="flex justify-start items-center w-full text-left"
          >
            <span className="accordian-icon text-[#2E353B] text-[18px]">
              {openIndex === index ? (
                <IoMdClose></IoMdClose>
              ) : (
                <IoMdAdd></IoMdAdd>
              )}
            </span>
            <span className="accordian-question font-medium text-gray-900">
              {item.question}
            </span>
          </button>

          {openIndex === index && (
            <p className="accordian-answer text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

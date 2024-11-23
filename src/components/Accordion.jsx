import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b-callto-action/40 border-b-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className=" w-full pt-4 flex justify-between items-center font-lato text-gray-500 text-xl hover:text-callto-action"
      >
        <span className="text-left font-semibold">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-black shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-500 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-500 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out py-2 rounded-md bg-white text-gray-400 text-xl ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-normal text-base md:text-lg pr-4 md:px-6">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
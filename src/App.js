import { useState } from "react";
import "./input.css";

const faqs = [
  {
    question: "What is the first step of thinking in react ?",
    answer:
      "Break the desired UI into components and establish the component tree",
  },
  {
    question: "What is the second step of thinking in react ?",
    answer: "Build a static version in React (without state)",
  },
  {
    question: "What is the third step of thinking in react ?",
    answer:
      "Think about state like : when to use state, Types of state: local vs global and where to place each piece of state",
  },
  {
    question: "What is the last step of thinking in react ?",
    answer:
      "Establish data flow: One way data flow, child to parent communication and accessing global state.",
  },
];

export default function App() {
  return (
    <div className="mx-auto max-w-xl my-20">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  return (
    <div className="flex flex-col gap-y-10">
      {data.map((item, idx, arr) => (
        <Item item={item} num={idx} key={item.question} />
      ))}
    </div>
  );
}

function Item({ item, num }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(e) {
    setIsOpen((is) => !is);
  }

  return (
    <div
      className={`text-left font-semibold bg-gray-100 shadow-md grid  grid-cols-[auto_1fr_auto] p-4 gap-6 cursor-pointer ${
        isOpen ? `border-t-4 border-green-700 text-green-700` : ""
      }`}
      onClick={handleToggle}
    >
      <p className="text-xl">{num < 10 ? `0${num + 1}` : num}</p>
      <p className="text-xl">{item.question}</p>
      <button>{isOpen ? "➖" : "➕"}</button>
      {isOpen && (
        <p className="text-gray-800 text-md  col-start-2">{item.answer}</p>
      )}
    </div>
  );
}

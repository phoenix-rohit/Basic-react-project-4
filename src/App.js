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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="flex flex-col gap-y-10">
      {data.map((item, idx, arr) => (
        <Item
          question={item.question}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={idx}
          key={item.question}
        >
          {item.answer}
        </Item>
      ))}
      <Item
        question="How to become more expert ?"
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={23}
        key="man"
      >
        <p>Here are the answer in steps: </p>
        <ol className="list-decimal">
          <li>Practice</li>
        </ol>
      </Item>
    </div>
  );
}

function Item({ question, num, curOpen, onOpen, children }) {
  let isOpen = num === curOpen;

  function handleToggle(e) {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`text-left font-semibold bg-gray-100 shadow-md grid  grid-cols-[auto_1fr_auto] p-4 gap-6 cursor-pointer ${
        isOpen ? `border-t-4 border-green-700 text-green-700` : ""
      }`}
      onClick={handleToggle}
    >
      <p className="text-xl">{num < 10 ? `0${num + 1}` : num}</p>
      <p className="text-xl">{question}</p>
      <button>{isOpen ? "➖" : "➕"}</button>
      {isOpen && (
        <p className="text-gray-800 text-md  col-start-2">{children}</p>
      )}
    </div>
  );
}

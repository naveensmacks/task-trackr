import { useRef, useState } from "react";
import { useTasksContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddTask } = useTasksContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //basic validation
    if (!inputValue.trim()) {
      //vanilla js
      //document.getElementById("newItem").focus();
      //instead use useRef
      inputRef.current?.focus();
      return;
    }

    handleAddTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="min-w-[384px] md:min-w-[240px] lg:min-w-[300px] bg-gamma p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <h2 className="text-2xl">Add a task</h2>
        <input
          id="newItem"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Type here to add a task..."
          autoFocus={true}
          className="bg-delta p-2 rounded-md text-alpha"
        />
        <button className="bg-alpha p-2 rounded-md hover:scale-105 transition-transform duration-500">
          Add to list
        </button>
      </form>
    </div>
  );
}

import React from "react";

const TodoItem = ({ t, toggleComplete, deleteTodo }) => {
  return (
    <div
      className=" flex flex-row justify-between items-center text-center border-b-2"
      style={{
        marginBottom: "20px",
      }}
    >
      <li
        style={{
          textDecoration: t.completed ? "line-through" : "none",
        }}
      >
        <span className="span-click" onClick={toggleComplete}>{t.task}</span>
      </li>
      <button
        onClick={deleteTodo}
        className=" ml-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Delete</span>
      </button>
    </div>
  );
};

export default TodoItem;

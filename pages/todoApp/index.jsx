import TodoList from "@/components/TodoList";
import React, { useState } from "react";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/hello");
  const initialTodos = await response.json();

  return {
    props: {
      initialTodos,
    },
  };
}

const Todo = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async () => {
    const response = await fetch("api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTodo }),
    });
    const todo = await response.json();
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  console.log(todos);
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" mt-4">
        <div className=" mb-5">
          <div className="flex items-center border-b py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Learn Backend"
              aria-label="Full name"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="button"
              onClick={() => addTodo()}
            >
              Add
            </button>
          </div>
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;

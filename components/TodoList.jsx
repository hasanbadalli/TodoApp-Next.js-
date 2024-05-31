import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
    const toggleComplete = async (id, completed) => {
        const response = await fetch("/api/hello", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, completed }),
        });
        await response.json();
        setTodos(
          todos.map((t) => (t.id === id ? { ...t, completed } : t))
        );
      };
    
      const deleteTodo = async (id) => {
        const response = await fetch("/api/hello", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        await response.json();
        setTodos(todos.filter((todo) => todo.id !== id));
      };
  return (
    <div>
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            t={t}
            toggleComplete={() => toggleComplete(t.id, !t.completed)}
            deleteTodo={() => deleteTodo(t.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

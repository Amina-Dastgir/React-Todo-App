import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Complete React Assignment",
    "Practice Components",
    "Learn Props Passing",
    "Make the documentation",
    "Submit the Task"
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    console.log("Button clicked");
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Todo List App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>Add Task</button>
        </div>

        <p className="counter">
          Total Tasks: <strong>{todos.length}</strong>
        </p>

        <TodoList todos={todos} deleteTodo={deleteTodo} />

      </div>
    </div>
  );

}

export default App;
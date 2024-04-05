import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false },
    { label: "Implement React Application", important: true },
    { label: "Make notes from your stud", important: false },
    { label: "Do not drink alchohol", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

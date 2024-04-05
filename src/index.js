import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Implement React Application", important: true, id: 2 },
    { label: "Make notes from your stud", important: false, id: 3 },
    { label: "Do not drink alchohol", important: false, id: 4 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
      <ItemStatusFilter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

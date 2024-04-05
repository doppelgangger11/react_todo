import React from "react";
import ReactDOM from "react-dom";

// console.log("testing react app");

//const element = React.createElement('hi', null, 'Hello React World');
const TodoList = () => {
  let items = [
    "Install React",
    "Study React",
    "Use React",
    "Build React AppReact",
    "But Python Is Better ¯_(ツ)_/¯",
  ];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px",
  };

  return <input style={searchStyle} placeholder={searchText} disabled={true} />;
};

const App = () => {
  const value = '<script>alert ("")</script>';

  return (
    <div>
      {value}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

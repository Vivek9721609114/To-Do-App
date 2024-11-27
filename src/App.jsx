import React, { useState } from "react";
import "./App.css";
import ToDoListItems from "./components/ToDoListItems";
const App = () => {
  const [todoList, setToDoList] = useState([]);

  const saveToDoList = (event) => {
    const toname = event.target.toname.value;
    if (!todoList.includes(toname)) {
      const finalToDoList = [...todoList, toname];
      setToDoList(finalToDoList);
    } else {
      alert("ToDo Name Allready Exists...");
    }
    event.preventDefault();
  };

  const list = todoList.map((value, index) => {
    return (
      <ToDoListItems
        key={index}
        value={value}
        indexNumber={index}
        todoList={todoList}
        setToDoList={setToDoList}
      />
    );
  });
  return (
    <div className="app">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default App;

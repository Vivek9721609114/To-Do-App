import React, { useState } from "react";
import "./ToDoListItems.css";
import { RxCross2 } from "react-icons/rx";

import { FiEdit } from "react-icons/fi";

const ToDoListItems = ({ value, indexNumber, todoList, setToDoList }) => {
  const [status, setStatus] = useState(false);
  const deleteRow = () => {
    const finalData = todoList.filter((v, i) => i != indexNumber);
    setToDoList(finalData);
  };

  const checkStatus = () => {
    setStatus(!status);
  };
  return (
    <>
      <li className={status ? "completetodo" : ""} onClick={checkStatus}>
        {indexNumber + 1} {value}
        <div className="btn">
          <button onClick={deleteRow}>
            <RxCross2 />
          </button>
          <button>
            <FiEdit />
          </button>
        </div>
      </li>
    </>
  );
};

export default ToDoListItems;

import React, { useState } from "react";

function Task({text, category}) {
  const [deleteTask, setDeleteTask] = useState(false)

  function handleDelete() {
     setDeleteTask(!deleteTask)
  }
  

  return (
    <div className="task">
      <div className="label">{deleteTask === false ?  category : null}</div>
      <div className="text">{deleteTask === false ? text : null}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
  

}

export default Task;

import React from "react";
import Task from "./Task";

function TaskList({tasks, selectCategory}) {
   const filteredTasks = tasks.filter((task) => {
           if(selectCategory === "All") return true
           else 
            return selectCategory === task.category
   })
     
   const myTasks = filteredTasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} />
  
 })

    
  return (
    <div className="tasks">

       {myTasks}
    
    </div>
  );
}

export default TaskList;

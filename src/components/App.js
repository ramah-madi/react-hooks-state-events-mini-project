import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [submittedData, setSubmittedData] = useState([...TASKS]);

  const [formData, setFormData] = useState({
    text:"",
    category: "Code" 
  })
  
  function onTaskFormSubmit(e) {
    e.preventDefault()
     setSubmittedData(() => [...TASKS, formData])
     setFormData({
      text: "",
      category: "Code",
    });
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} formData={formData} setFormData={setFormData} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={submittedData} selectCategory={selectCategory}/>
    </div>
  );
}

export default App;

import React from "react";

function NewTaskForm({categories, formData, setFormData, onTaskFormSubmit}) {
  const option = [...categories].slice(1).map((category) => {
        return <option key={category}>{category}</option>
  })

  function handleFormData(event){
    let value = event.target.value
    const name = event.target.name
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  return (
    <form className="new-task-form" onSubmit={
      onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormData} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormData} value={formData.category}>
          {option}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

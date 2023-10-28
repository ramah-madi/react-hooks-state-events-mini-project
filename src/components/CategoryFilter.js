import React from "react";

function CategoryFilter({categories, selectCategory, setSelectCategory}) {

  function handleCategory (event){
      let value = event.target.value
      
      setSelectCategory((selectCategory) => selectCategory =  value)  
  
  }
  console.log(selectCategory)
  const categoryButtons = categories.map((category) => {
    if(selectCategory === category) {

      return <button key={category} className={"selected"} value={category} onClick={handleCategory}>{category}</button> 
    }
    else {
      return <button key={category}  value={category} onClick={handleCategory}>{category}</button> 
    }
      
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

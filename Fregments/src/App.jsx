import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/Error.jsx";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";

function App() {
  
  
  let [foodItems, setFoodItem] = useState([])
 


  
  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
        let newFoodItem = event.target.value;
        let newItems = [...foodItems, newFoodItem];
        setFoodItem(newItems);
        console.log(`Food ` + newFoodItem);
    }
    
    // setTextState(event.target.value)
}

  return (
    <>
      <Container>
        <h1 className="heading">Healty Food</h1>
        <div className="line"></div>
         <FoodInput handleKeyDown={onKeyDown}/>
        <FoodItems passingValue={foodItems} />
        <ErrorMsg passingValue={foodItems} />
      </Container>
      
    </>
  );
}

export default App;

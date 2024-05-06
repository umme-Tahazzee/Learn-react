import React, { useState } from "react";
import Item from "./Item";

function FoodItems({ passingValue }) {
  let [activeItems, SetActiveItems] = useState([]);
  let OnBuyButton = (item, event) => {
       let newItems = [...activeItems, item];
       console.log(item);
       SetActiveItems(newItems); 
  }
  
  return (
    <>
      <div>
        <ul className="list-group">
          {passingValue.map((item) => {
            return (
              <Item
                key={item}
                foodItem={item}
                bought={activeItems.includes(item)}
                handleBuyButton={(event)=> OnBuyButton}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FoodItems;

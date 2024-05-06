import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {
  
 const {todoItems } = useContext(  TodoItemsContext);
 
  return (
    <>
      <div className="container1">
        {todoItems.map((item) => {
          return (
            <TodoItem
              key={item.name}
              todoName={item.name}
             
            />
          );
        })}
      </div>
    </>
  );
}

export default TodoItems;

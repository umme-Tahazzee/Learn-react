import React, { useContext, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {TodoItemsContext} from '../store/todo-items-store'

function AddTodo() {
 const {addNewItem} = useContext(TodoItemsContext);
  
 
  const todoNameELement = useRef();
  const dueDateELement = useRef();

  
  const handleAddButton = (event) => {
    event.preventDefault()
    const todoName = todoNameELement.current.value;
    const dueDate = dueDateELement.current.value;
    todoNameELement.current.value = "";
    dueDateELement.current.value = "";
    addNewItem(todoName, dueDate);
    
  };
  return (
    <>
      <div className="container text-center">
        <form onSubmit={handleAddButton} className="row">
             
          <div className="col-6">
            <input
              type="text"
              ref={todoNameELement }
              placeholder="Enter Your Workspace"
             
              
            />
          </div>
          <div className="col-4">
            <input
             type="date"
             ref={dueDateELement}
            
            />
          </div>
          <div className="col-2">
            <button
              
              className="btn btn-success"
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        
        </form>
      </div>
    </>
  );
}

export default AddTodo;

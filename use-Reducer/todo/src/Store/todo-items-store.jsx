import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.playload.itemName, dueDate: action.playload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.playload.itemName);
  }
  return newTodoItems;
};


const TodoItemsContextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      playload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const DeleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(DeleteItemAction);
  };
  return (
      <TodoItemsContext.Provider value={{
          todoItems,
          addNewItem,
          deleteItem,
      }}>
        {children}   
      </TodoItemsContext.Provider>
  )
};

export default TodoItemsContextProvider;

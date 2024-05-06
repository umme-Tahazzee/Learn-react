import React, { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";


function WelcomeMsg() {
  const {todoItems} = useContext(  TodoItemsContext);
  return (
    todoItems.length === 0 &&
     (
      <>
        <div className={styles.rotating_text_wrapper}>
          <h2>Today Ur Task Is complete</h2>
          <h2>Happy Coding</h2>
          <h2>Enjoy Ur day</h2>
        </div>
      </>
    )
  );
}

export default WelcomeMsg;

import React from "react";
import styles from './Item.module.css'

function Item({ foodItem , bought,  handleBuyButton}) {
  // let {foodItem} = props;
  

  
  return (
    <>
      <div>
       
        <li  className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
          <button className={`${styles.button} btn btn-outline-warning`}   type="button"
          onClick={handleBuyButton}
          >Buy</button>
        </li>
      </div>
    </>
  );
}

export default Item;

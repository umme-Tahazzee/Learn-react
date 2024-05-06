import styles from './FoodInput.module.css'

const FoodInput = ({  handleKeyDown }) => {
  

    return <input 
    placeholder='Enter FoodItem' 
    className={styles.input}
    type="text"
    onKeyDown={  handleKeyDown  }
    />
}
export default FoodInput
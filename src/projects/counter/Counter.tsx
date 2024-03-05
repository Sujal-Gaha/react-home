import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleDecreaseButtonClick = () => {
    setCount(count - 1);
  };

  const handleResetButtonClick = () => {
    setCount(0);
  };

  const handleIncreaseButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.count}>{count}</h1>
      <button
        className={styles.countController}
        onClick={() => handleDecreaseButtonClick()}
      >
        Decrease
      </button>
      <button
        className={styles.countController}
        onClick={() => handleResetButtonClick()}
      >
        Reset
      </button>
      <button
        className={styles.countController}
        onClick={() => handleIncreaseButtonClick()}
      >
        Increase
      </button>
    </div>
  );
}

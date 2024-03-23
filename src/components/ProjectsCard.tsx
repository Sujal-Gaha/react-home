import { Link } from "react-router-dom";
import styles from "./ProjectsCard.module.css";

export function ProjectsCard() {
  return (
    <div className={styles.cardContainer}>
      <Link to={"/counter"} className={styles.card1}>
        <h2>Counter</h2>
      </Link>
      <Link to={""} className={styles.card2}>
        <h2>Stop Watch</h2>
      </Link>
      <Link to={""} className={styles.card3}>
        <h2>Todo App</h2>
      </Link>
      <Link to={""} className={styles.card4}>
        <h2>Weather App</h2>
      </Link>
      <Link to={""} className={styles.card5}>
        <h2>Calculator</h2>
      </Link>
      <Link to={""} className={styles.card6}>
        <h2>Stop Watch App</h2>
      </Link>
    </div>
  );
}

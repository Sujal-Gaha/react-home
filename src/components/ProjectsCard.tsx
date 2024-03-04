import { Link } from "react-router-dom";
import styles from "./ProjectsCard.module.css";

export function ProjectsCard() {
  return (
    <div className={styles.cardContainer}>
      <Link to={"./"} className={styles.card1}>
        Counter
      </Link>
      <div className={styles.card2}>Todo List</div>
      <div className={styles.card3}>Book Review</div>
      <div className={styles.card4}>Weather App</div>
      <div className={styles.card5}>Project#5</div>
      <div className={styles.card6}>Project#6</div>
    </div>
  );
}

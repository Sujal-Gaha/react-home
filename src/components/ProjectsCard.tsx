import { Link } from "react-router-dom";
import styles from "./ProjectsCard.module.css";

export function ProjectsCard() {
  return (
    <div className={styles.cardContainer}>
      <Link to={"./"} className={styles.card1}>
        Counter
      </Link>
      <Link to={""} className={styles.card2}>Todo List</Link>
      <Link to={""} className={styles.card3}>Book Review</Link>
      <Link to={""} className={styles.card4}>Weather App</Link>
      <Link to={""} className={styles.card5}>Project#5</Link>
      <Link to={""} className={styles.card6}>Project#6</Link>
    </div>
  );
}

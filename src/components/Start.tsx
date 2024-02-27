import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./Start.module.css";

export function Start() {
  return (
    <div className={styles.start}>
      <br />
      <h1>This is the starting page</h1>
      <Link to={"/home"}>
        Go to full site <FaArrowCircleRight />
      </Link>
    </div>
  );
}

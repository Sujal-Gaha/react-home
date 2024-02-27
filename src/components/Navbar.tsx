import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <h1>
          <span style={{ color: "red", fontSize: "48px" }}>S</span>
          <span style={{ color: "white" }}>ujal</span>{" "}
          <span
            style={{
              color: "#0088a9",
            }}
          >
            Gaha
          </span>
        </h1>
      </Link>
      <Link className={styles.item} to={"/home"}>
        Home
      </Link>
      <Link className={styles.item} to={"/projects"}>
        Projects
      </Link>
      <Link className={styles.item} to={"/blog"}>
        Blog
      </Link>
      <Link className={styles.item} to={"/contact"}>
        Contact
      </Link>
    </div>
  );
}

import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";

export function Start() {
  return (
    <div className={styles.start}>
      <h1>This is the starting page</h1>
      <Link className={styles.startLink} to={"/home"}>
        Go to full site <FaArrowCircleRight />
      </Link>
      <div>
        <a href="https://github.com/Sujal-Gaha" target="_blank">
          <FaGithub fill="wheat" />
        </a>
        <a
          href="https://www.linkedin.com/in/sujal-magar-382889287/"
          target="_blank"
        >
          <CiLinkedin fill="wheat" />
        </a>
        <a href="">
          <FaXTwitter fill="wheat" />
        </a>
        <a href="">
          <FaReddit fill="wheat" />
        </a>
      </div>
    </div>
  );
}

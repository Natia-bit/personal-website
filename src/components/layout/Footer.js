import styles from "./Footer.module.css";

import Bug from "../common/Bug";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      Made with bugs
      <span className={styles.bugOne}>
        <Bug outline="#FFFFFF" />
      </span>
      <span className={styles.bugTwo}>
        <Bug outline="#FFFFFF" />
      </span>
      sweat, and tears{" "}
    </footer>
  );
}

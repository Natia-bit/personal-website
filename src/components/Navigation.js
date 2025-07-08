import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/">About Me</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/projects">My Projects</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/lessons">Lessons & Wisdoms</Link>
      </li>
    </ul>
  );
}

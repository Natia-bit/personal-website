import Link from "next/link";
import styles from "./Navigation.module.css";
import SectionLink from "./SectionLink";

export default function Navigation() {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/">About Me</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/projects">Projects</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="#skills">Skills</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="#experience">Work Experiance</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="#personal-details">Personal Details</Link>
      </li>
    </ul>
  );
}

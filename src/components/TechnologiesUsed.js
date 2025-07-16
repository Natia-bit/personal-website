import styles from "./TechnologiesUsed.module.css";

export default function TechnologiesUsed({ skillName }) {
  return <span className={styles.sketchy}>{skillName}</span>;
}

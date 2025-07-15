import styles from "./ContentDisplay.module.css";

export default function ContentDisplay({ title, children }) {
  return (
    <div>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}

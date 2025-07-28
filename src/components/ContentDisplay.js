import styles from "./ContentDisplay.module.css";

export default function ContentDisplay({ title, children }) {
  return (
    <div className={styles.contentContainer}>
      {title && (
        <h2 className={styles.title}>{`{ ${title.toUpperCase()} }`}</h2>
      )}
      {children}
    </div>
  );
}

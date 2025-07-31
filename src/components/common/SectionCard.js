import styles from "./SectionCard.module.css";

export default function SectionCard({ title, children }) {
  return (
    <div className={styles.sectionContainer}>
      {title && (
        <h2 className={styles.title}>{`{ ${title.toUpperCase()} }`}</h2>
      )}
      {children}
    </div>
  );
}

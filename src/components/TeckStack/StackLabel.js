import Squares from "./Squares";
import styles from "./StackLabel.module.css";

export default function StackLabel({ color, name }) {
  return (
    <div className={styles.labelContainer}>
      <Squares color={color}></Squares>
      <label className={styles.labelText}>{name}</label>
    </div>
  );
}

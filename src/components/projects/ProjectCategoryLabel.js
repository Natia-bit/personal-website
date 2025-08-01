import Squares from "../common/Squares";
import styles from "./ProjectCategoryLabel.module.css";

export default function ProjectCategoryLabel({ color, name }) {
  return (
    <div className={styles.labelContainer}>
      <Squares color={color}></Squares>
      <label className={styles.labelText}>{name}</label>
    </div>
  );
}

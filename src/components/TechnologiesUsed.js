import Image from "next/image";
import styles from "./TechnologiesUsed.module.css";

export default function TechnologiesUsed({ iconSrc, skillName }) {
  return (
    <div className={styles.sketchy}>
      <Image
        src={iconSrc}
        alt={`${skillName} icon`}
        width={20}
        height={20}
        className={styles.image}
      />
      <label className={styles.name}>{skillName}</label>
    </div>
  );
}

import Image from "next/image";
import styles from "./TechnologiesUsed.module.css";

export default function TechnologiesUsed({ iconSrc, skillName, bgColor }) {
  return (
    <div
      className={styles.techContainer}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      {/* <span>⎡</span> */}
      <Image
        src={iconSrc}
        alt={`${skillName} icon`}
        width={20}
        height={20}
        className={styles.image}
      />
      <label className={styles.name}>{skillName}</label>
      {/* <span>⎦</span> */}
    </div>
  );
}

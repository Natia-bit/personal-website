import styles from "./SkillSlider.module.css";
import Image from "next/image";

export default function SkillSlider({ skillName, skillLevel, iconSrc }) {
  return (
    <div className={styles.skillContainer}>
      <Image
        src={iconSrc}
        alt={`${skillName} icon`}
        width={40}
        height={40}
        className={styles.image}
      />
      <div className={styles.skillBar}>
        <label className={styles.name}>{skillName}</label>
        <div className={styles.sliderWrapper}>
          <input
            className={styles.range}
            type="range"
            id="skill"
            name="skill"
            min="0"
            max="10"
            value={skillLevel}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  );
}

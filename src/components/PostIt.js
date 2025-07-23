import Image from "next/image";
import styles from "./PostIt.module.css";

export default function PostIt({
  title,
  color = "#ffc",
  iconSrc,
  imageWidth,
  imageHeight,
  children,
}) {
  return (
    <div className={styles.postItContainer} style={{ backgroundColor: color }}>
      <h3>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={imageWidth}
            height={imageHeight}
          />
        )}
        {title}
      </h3>

      <div className={styles.text}>{children}</div>
    </div>
  );
}

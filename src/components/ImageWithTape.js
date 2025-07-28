import Image from "next/image";
import styles from "./ImageWithTape.module.css";

export default function ImageWithTape({
  imageSrc,
  imageWidth,
  imageHeight,
  altText = "taped image",
  rotation = 0,
}) {
  return (
    <div
      className={`${styles.imgOneTape} ${styles.imgTape}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
}

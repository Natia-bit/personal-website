import ImageWithTape from "./ImageWithTape";

import styles from "./MainHeading.module.css";
export default function MainHeading({ title, children }) {
  return (
    <div className={styles.headingContainer}>
      <ImageWithTape
        imageSrc="/heading/portrait.png"
        imageWidth={250}
        imageHeight={250}
        rotation={-2}
      ></ImageWithTape>
      <div className={styles.textWrapper}>
        <h1>{title}</h1>
        {/* <p>A software engineer</p> */}
        {/* <Image
          src="/heading/whiteboard-stack.png"
          alt="stack"
          width={340}
          height={180}
          className={styles.stack}
        ></Image> */}

        {/* <ProjectOverview></ProjectOverview> */}
      </div>
    </div>
  );
}

import ContentDisplay from "./ContentDisplay";
import ImageWithTape from "./ImageWithTape";
import ProjectOverview from "./ProjectSection/ProjectOverview";

import styles from "./MainHeading.module.css";
export default function MainHeading({ title, children }) {
  return (
    <div className={styles.headingContainer}>
      <ImageWithTape
        imageSrc="/heading/portrait.png"
        imageWidth={280}
        imageHeight={280}
        rotation={-2}
      ></ImageWithTape>
      <div className={styles.textWrapper}>
        <h1>{title}</h1>

        <div className={styles.aboutMeText}>
          <ContentDisplay title="A bit about me">
            <p className={styles.text}>
              After working for over 10 years in the design field, I felt that I
              was in a stale position where I was repeating the years working.
              In 2021 I decided to follow my old and not forgotten dream and
              learn how to code and transition to the tech industry, while I
              maintained part time work as designer to close clientele. Since
              then I have been taking various courses and developing small
              encapsulated projects. At the end of 2024 I was fortunate to be
              exposed to the tech industry and view at first hand the
              development cycle during the internship. After the internship I
              continue expanding my knowledge by working on small projects and
              looking for a new role.
            </p>
          </ContentDisplay>
        </div>
      </div>
    </div>
  );
}

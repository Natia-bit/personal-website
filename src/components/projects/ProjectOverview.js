import ProjectCategoryLabel from "./ProjectCategoryLabel";
import ProjectCategorySection from "./ProjectCategorySection";

import styles from "./ProjectOverview.module.css";

export default function ProjectOverview() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.labels}>
        <ProjectCategoryLabel
          color="#a1c8e9"
          name="Back End"
        ></ProjectCategoryLabel>
        <ProjectCategoryLabel
          color="#fff69b"
          name="Front End"
        ></ProjectCategoryLabel>
        <ProjectCategoryLabel
          color="#bcdfc9"
          name="Full Stack"
        ></ProjectCategoryLabel>
      </div>
      <ProjectCategorySection className={styles.data}></ProjectCategorySection>
    </div>
  );
}

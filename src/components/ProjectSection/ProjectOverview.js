import StackLabel from "../TeckStack/StackLabel";
import ProjectData from "./ProjectData";

import styles from "./ProjectOverview.module.css";

export default function ProjectOverview() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.labels}>
        <StackLabel color="#a1c8e9" name="Back End"></StackLabel>
        <StackLabel color="#fff69b" name="Front End"></StackLabel>
        <StackLabel color="#bcdfc9" name="Full Stack"></StackLabel>
      </div>
      <ProjectData className={styles.data}></ProjectData>
    </div>
  );
}

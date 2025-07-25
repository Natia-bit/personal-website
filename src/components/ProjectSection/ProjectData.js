import PostIt from "../PostIt";

import styles from "./ProjectData.module.css";
import planning from "../../data/projects-planning.json";
import inprogress from "../../data/projects-inprogress.json";
import done from "../../data/projects-done.json";

export default function ProjectData() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.planning}>
        <h2>Planning</h2>
        {planning.map((item, i) => (
          <PostIt key={i}>
            <label>{item.name}</label>
          </PostIt>
        ))}
      </div>

      <div className={styles.inprogress}>
        <h2>In Progress</h2>
        {inprogress.map((item, i) => (
          <PostIt key={i}>
            <label>{item.name}</label>
          </PostIt>
        ))}
      </div>

      <div className={styles.done}>
        <h2>Done</h2>
        {done.map((item, i) => (
          <PostIt key={i}>
            <label>{item.name}</label>
          </PostIt>
        ))}
      </div>
    </div>
  );
}

import styles from "./ProjectData.module.css";
import planning from "../../data/myProjects/planning";
import inprogress from "../../data/myProjects/inprogress";
import done from "../../data/myProjects/done";

import ProjectCard from "./ProjectCard";

const categoryColors = {
  "Back End": "#a1c8e9",
  "Front End": "#fff69b",
  "Full Stack": "#bcdfc9",
  default: "#ffc",
};

export default function ProjectData() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.planning}>
        <h2>Planning</h2>
        {planning.map((item, i) => (
          <ProjectCard
            key={i}
            project={item}
            categoryColor={
              categoryColors[item.category] || categoryColors.default
            }
          />
        ))}
      </div>

      <div className={styles.inprogress}>
        <h2>In Progress</h2>
        {inprogress.map((item, i) => (
          <ProjectCard
            key={i}
            project={item}
            categoryColor={
              categoryColors[item.category] || categoryColors.default
            }
          />
        ))}
      </div>

      <div className={styles.done}>
        <h2>Done</h2>
        {done.map((item, i) => (
          <ProjectCard
            key={i}
            project={item}
            categoryColor={
              categoryColors[item.category] || categoryColors.default
            }
          />
        ))}
      </div>
    </div>
  );
}

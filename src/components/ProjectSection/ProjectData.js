import Image from "next/image";

import PostIt from "../PostIt";
import Bug from "../Bug";

import styles from "./ProjectData.module.css";
import planning from "../../data/projects-planning.json";
import inprogress from "../../data/projects-inprogress.json";
import done from "../../data/projects-done.json";
import TechnologiesUsed from "../TechnologiesUsed";

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
          <PostIt
            key={i}
            color={categoryColors[item.category] || categoryColors.default}
          >
            <label className={styles.projectName}>{item.name}</label>
            <div className={styles.techUsed}>
              {item.techUsed.map((skill, idx) => (
                <TechnologiesUsed
                  key={idx}
                  iconSrc={skill.iconSrc}
                  skillName={skill.skill}
                ></TechnologiesUsed>
              ))}
            </div>
          </PostIt>
        ))}
      </div>

      <div className={styles.inprogress}>
        <h2>In Progress</h2>
        {inprogress.map((item, i) => (
          <PostIt
            key={i}
            color={categoryColors[item.category] || categoryColors.default}
          >
            {item.bugs === "true" && (
              <span className={styles.bugIcon}>
                <Bug width={40} height={40} />
              </span>
            )}
            <div className={styles.linkContainer}>
              <label className={styles.projectName}> {item.name} </label>
              <span>
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>
                    {(
                      <Image
                        src={item.imgSrcOne}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                    ) || "Oups! What happened to the link?"}
                  </span>
                  {/* {"[Link]" || "Oups! What happened to the link?"} */}
                </a>
              </span>
            </div>
            <p>{item.description}</p>

            <div className={styles.techUsed}>
              {item.techUsed.map((skill, idx) => (
                <TechnologiesUsed
                  key={idx}
                  iconSrc={skill.iconSrc}
                  skillName={skill.skill}
                ></TechnologiesUsed>
              ))}
            </div>
          </PostIt>
        ))}
      </div>

      <div className={styles.done}>
        <h2>Done</h2>
        {done.map((item, i) => (
          <PostIt
            key={i}
            color={categoryColors[item.category] || categoryColors.default}
          >
            {item.bugs === "true" && (
              <span className={styles.bugIcon}>
                <Bug width={40} height={40} />
              </span>
            )}
            <div className={styles.linkContainer}>
              <label className={styles.projectName}>{item.name} </label>
              <span>
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>
                    {(
                      <Image
                        src={item.imgSrcOne}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                    ) || "Oups! What happened to the link?"}
                  </span>
                </a>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>
                    {(
                      <Image
                        src={item.imgLink}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                    ) || "Oups! What happened to the link?"}
                  </span>
                </a>
              </span>
            </div>
            <div className={styles.techUsed}>
              {item.techUsed.map((skill, idx) => (
                <TechnologiesUsed
                  key={idx}
                  iconSrc={skill.iconSrc}
                  skillName={skill.skill}
                ></TechnologiesUsed>
              ))}
            </div>
          </PostIt>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Bug from "../common/Bug";
import PostIt from "../common/PostIt";
import TechnologiesUsed from "../TechnologiesUsed";

import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, categoryColor }) {
  const {
    name,
    bugs,
    gitLink,
    imgSrcOne,
    link,
    imgLink,
    description,
    techUsed,
  } = project;

  return (
    <PostIt color={categoryColor}>
      {bugs === "true" && (
        <span className={styles.bugIcon}>
          <Bug width={40} height={40} />
        </span>
      )}
      <div className={styles.linkContainer}>
        <label className={styles.projectName}>{name} </label>
        <span className={styles.projectLinksWrapper}>
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>
                {(
                  <Image
                    src={imgSrcOne}
                    alt={`${name} GitHub link`}
                    width={30}
                    height={30}
                  />
                ) || "Oups! What happened to the link?"}
              </span>
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.siteLink}>
                {(
                  <Image
                    src={imgLink}
                    alt={`${name} project website link`}
                    width={35}
                    height={35}
                  />
                ) || "Oups! What happened to the link?"}
              </span>
            </a>
          )}
        </span>
      </div>
      <p>{description}</p>
      <div className={styles.techUsed}>
        {techUsed.map((skill, idx) => (
          <TechnologiesUsed
            key={idx}
            iconSrc={skill.iconSrc}
            skillName={skill.skill}
          />
        ))}
      </div>
    </PostIt>
  );
}

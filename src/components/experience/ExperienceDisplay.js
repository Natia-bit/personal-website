"use client";

import { useState } from "react";
import TechnologiesUsed from "../common/TechnologiesUsed";
import Image from "next/image";
import styles from "./ExperienceDisplay.module.css";

export default function ExperienceDisplay({
  jobTitle,
  company,
  startDate,
  endDate,
  location,
  techUsed,
  description = [],
  initialExpanded = false,
}) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={styles.experianceContainer}>
      <div className={styles.main}>
        <h2 className={styles.jobTitle}>
          {jobTitle} <span className={styles.company}> @ {company}</span>
        </h2>

        <div className={styles.dateAndToggleButton}>
          <h3>
            {startDate} - {endDate}
          </h3>
          <button
            onClick={toggleExpanded}
            className={styles.toggleButton}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <span
              className={`${styles.toggleIcon} ${
                expanded ? styles.toggleIconExpanded : ""
              }`}
            >
              {expanded ? "-" : "+"}
            </span>
          </button>
        </div>
      </div>
      {expanded && (
        <div>
          <p className={styles.details}>
            <span>
              <Image
                src="/common/location.svg"
                alt="location"
                width={15}
                height={15}
              ></Image>
              {location}
            </span>
          </p>
          <ul className={styles.description}>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className={styles.techUsed}>
            {techUsed.map((skill, idx) => (
              <TechnologiesUsed
                key={idx}
                iconSrc={skill.iconSrc}
                skillName={skill.skill}
                bgColor="var( --color-light)"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

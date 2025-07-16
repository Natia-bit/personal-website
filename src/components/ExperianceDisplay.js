"use client";

import { useState } from "react";
import TechnologiesUsed from "./TechnologiesUsed";
import styles from "./ExperianceDisplay.module.css";

export default function ExperianceDisplay({
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
        <div className={styles.mainHeader}>
          <h2>{jobTitle}</h2>
          <h3>
            {startDate} - {endDate}
          </h3>
          <button
            onClick={toggleExpanded}
            className={styles.toggleButton}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
      {expanded && (
        <div>
          <p className={styles.details}>
            <span>{company}</span>
            <span> | </span>
            <span> {location}</span>
          </p>
          <ul className={styles.description}>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className={styles.techUsed}>
            {techUsed.map((skill, idx) => (
              <TechnologiesUsed key={idx} skillName={skill} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

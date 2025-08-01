"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./SectionLink.module.css";
import { useState } from "react";

export default function SectionLink({ href, iconSrc, animatedSrc, label }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className={styles.link}>
      <div
        className={styles.sectionLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.iconWrapper}>
          <Image
            src={isHovered && animatedSrc ? animatedSrc : iconSrc}
            alt={`${label} icon`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className={styles.label}>{label}</span>
      </div>
    </Link>
  );
}

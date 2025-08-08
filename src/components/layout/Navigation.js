"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Bug from "../common/Bug";

const sections = [
  { id: "introduction", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "personal-details", label: "Personal Details" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });

      const nearest = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      );
      setActiveSection(nearest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className={styles.navList}>
      {sections.map(({ id, label }) => (
        <li
          key={id}
          className={`${styles.navItem} ${
            activeSection === id ? styles.active : styles.inactive
          }`}
        >
          <Link href={`/#${id}`}>{label}</Link>
        </li>
      ))}

      <Link href="/easter-egg" className={styles.test}>
        <div className={styles.glitchWrapper}>
          <Bug width={60} height={60} className={styles.bug} />
        </div>
      </Link>
    </ul>
  );
}

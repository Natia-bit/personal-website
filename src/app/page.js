import ContentDisplay from "@/components/ContentDisplay";
import SectionLink from "@/components/SectionLink";
import styles from "./page.module.css";
import SkillSlider from "@/components/SkillSlider";
import Image from "next/image";
import MagneticClipImage from "@/components/MagneticClipImage";
import TechnologiesUsed from "@/components/TechnologiesUsed";

const skillData = [
  { skillName: "Java", skillLevel: "6", iconSrc: "/skills/java.png" },
  { skillName: "Python", skillLevel: "3", iconSrc: "/skills/python.svg" },
  {
    skillName: "Spring Boot",
    skillLevel: "6",
    iconSrc: "/skills/spring-boot.svg",
  },
  { skillName: "Django", skillLevel: "3", iconSrc: "/skills/django.png" },
  {
    skillName: "SQL (MySQL/Postgres)",
    skillLevel: "6",
    iconSrc: "/skills/sql.png",
  },
  { skillName: "CSS", skillLevel: "5", iconSrc: "/skills/css.png" },
  { skillName: "HTML", skillLevel: "5", iconSrc: "/skills/html.png" },
  {
    skillName: "JavaScript",
    skillLevel: "5",
    iconSrc: "/skills/javascript.png",
  },
  {
    skillName: "React (Next.js)",
    skillLevel: "5",
    iconSrc: "/skills/react.png",
  },
  { skillName: "Vue (Nuxt.js)", skillLevel: "3", iconSrc: "/skills/vuejs.png" },
  { skillName: "Docker", skillLevel: "3", iconSrc: "/skills/docker.png" },
  { skillName: "Git", skillLevel: "7", iconSrc: "/skills/git.png" },
  { skillName: "GitHub", skillLevel: "7", iconSrc: "/skills/github.png" },
];

export default function Home() {
  return (
    <div>
      <h1>Hello! I am Natia </h1>
      <ContentDisplay title="A bit about me...">
        <p>
          After working for over 10 years in the design field, I felt that I was
          in a stale position where I was repeating the years working. In 2021 I
          decided to follow my old and not forgotten dream and learn how to code
          and transition to the tech industry, while I maintained part time work
          as designer to close clientele. Since then I have been taking various
          courses and developing small encapsulated projects.
        </p>
        <p>
          At the end of 2024 I was fortunate to be exposed to the tech industry
          and view at first hand the development cycle during the internship.
          After the internship I continue expanding my knowledge by working on
          small projects and looking for a new role.{" "}
        </p>

        <nav className={styles.SectionLinks}>
          <SectionLink
            href="#skills"
            iconSrc="/icons/handrawn-gears.png"
            label="Skills"
          />
          <SectionLink
            href="#experience"
            iconSrc="/icons/work.png"
            label="Work Experience"
          />
          <SectionLink
            href="#personal-details"
            iconSrc="/icons/person.png"
            label="Personal Details"
          />
          <SectionLink
            href="#interests"
            iconSrc="/icons/interests.png"
            label="Interests"
          />
        </nav>
      </ContentDisplay>

      <section id="skills">
        <ContentDisplay title="Skills">
          <div className={styles.skillContainer}>
            <div className={styles.skillList}>
              {skillData.map((skill) => (
                <SkillSlider
                  key={skill.skillName}
                  skillName={skill.skillName}
                  skillLevel={skill.skillLevel}
                  iconSrc={skill.iconSrc}
                />
              ))}
            </div>

            <MagneticClipImage
              imageSrc="/memes/sheldon.jpg"
              imageWidth={400}
              imageHeight={400}
              rotation={4}
              clipColor="#FF0000"
            />
          </div>
        </ContentDisplay>
      </section>

      <section id="experience">
        <ContentDisplay title={"Experiance"} />
        <TechnologiesUsed skillName="Java"></TechnologiesUsed>
      </section>
    </div>
  );
}

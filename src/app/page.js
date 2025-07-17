import ContentDisplay from "@/components/ContentDisplay";
import SectionLink from "@/components/SectionLink";
import styles from "./page.module.css";
import SkillSlider from "@/components/SkillSlider";
import Image from "next/image";
import MagneticClipImage from "@/components/MagneticClipImage";
import ExperianceDisplay from "@/components/ExperianceDisplay";

import workExperiance from "../data/workExperiance.json";
import skillData from "../data/skillData.json";

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

        {workExperiance.map((job, idx) => (
          <ExperianceDisplay key={idx} {...job} initialExpanded={idx < 2} />
        ))}
      </section>
    </div>
  );
}

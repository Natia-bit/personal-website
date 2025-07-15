import ContentDisplay from "@/components/ContentDisplay";
import SectionLink from "@/components/SectionLink";
import styles from "./page.module.css";
import SkillSlider from "@/components/SkillSlider";
import Image from "next/image";

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
            href="#work-experience"
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
              <SkillSlider
                skillName="Java"
                skillLevel="7"
                iconSrc="/skills/java.png"
              />
              <SkillSlider
                skillName="Python"
                skillLevel="4"
                iconSrc="/skills/python.svg"
              />
              <SkillSlider
                skillName="Spring Boot"
                skillLevel="6"
                iconSrc="/skills/spring-boot.svg"
              />
              <SkillSlider
                skillName="Django"
                skillLevel="4"
                iconSrc="/skills/django.png"
              />
              <SkillSlider
                skillName="SQL (MySQL/Postgres)"
                skillLevel="7"
                iconSrc="/skills/sql.png"
              />
              <SkillSlider
                skillName="CSS"
                skillLevel="6"
                iconSrc="/skills/css.png"
              />
              <SkillSlider
                skillName="HTML"
                skillLevel="7"
                iconSrc="/skills/html.png"
              />
              <SkillSlider
                skillName="JavaScript"
                skillLevel="6"
                iconSrc="/skills/javascript.png"
              />
              <SkillSlider
                skillName="React (Next.js)"
                skillLevel="6"
                iconSrc="/skills/react.png"
              />
              <SkillSlider
                skillName="Vue (Nuxt.js)"
                skillLevel="4"
                iconSrc="/skills/vuejs.png"
              />
              <SkillSlider
                skillName="Docker"
                skillLevel="5"
                iconSrc="/skills/docker.png"
              />
              <SkillSlider
                skillName="Git"
                skillLevel="8"
                iconSrc="/skills/git.png"
              />
              <SkillSlider
                skillName="GitHub"
                skillLevel="8"
                iconSrc="/skills/github.png"
              />
            </div>
            <Image
              src="/memes/sheldon.jpg"
              alt="meme"
              className={styles.meme}
              width={300}
              height={300}
            />
          </div>
        </ContentDisplay>
      </section>
    </div>
  );
}

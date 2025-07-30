import SectionCard from "@/components/SectionCard";
import ExperienceDisplay from "@/components/ExperienceDisplay";
import ImageWithTape from "@/components/ImageWithTape";
import Introduction from "@/components/introduction/Introduction";
import PersonalDetails from "@/components/PersonalDetails";
import ProjectOverview from "@/components/projects/ProjectOverview";
import SkillSlider from "@/components/SkillSlider";
import skillData from "../data/skillData.json";
import workExperiance from "../data/workExperiance.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section id="introduction" className={styles.intro}>
        <Introduction title="Hello! I'm Natia"></Introduction>
      </section>

      <section id="projects">
        <SectionCard title="Projects" className={styles.myProjects}>
          <ProjectOverview></ProjectOverview>
        </SectionCard>
      </section>

      {/* <section id="skills">
        <SectionCard title="Skills">
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

            <ImageWithTape
              imageSrc="/memes/sheldon.jpg"
              imageWidth={400}
              imageHeight={400}
              rotation={4}
              className={styles.tapedImage}
            ></ImageWithTape>
          </div>
        </SectionCard>
      </section> */}

      {/* <section id="experience" className={styles.experienceContainer}>
        <SectionCard title={"Experience"}>
          <div className={styles.experienceContainerWrapper}>
            {workExperiance.map((job, idx) => (
              <ExperienceDisplay key={idx} {...job} initialExpanded={idx < 2} />
            ))}
          </div>
        </SectionCard>
      </section> */}

      {/* <section id="personal-details">
        <SectionCard title={"Personal Details"}>
          <PersonalDetails />
        </SectionCard>
      </section> */}
    </div>
  );
}

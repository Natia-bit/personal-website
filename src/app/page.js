import ContentDisplay from "@/components/ContentDisplay";
import SectionLink from "@/components/SectionLink";
import styles from "./page.module.css";
import SkillSlider from "@/components/SkillSlider";
import ExperienceDisplay from "@/components/ExperienceDisplay";
import PersonalDetails from "@/components/PersonalDetails";
import workExperiance from "../data/workExperiance.json";
import skillData from "../data/skillData.json";
import ImageWithTape from "@/components/ImageWithTape";
import MainHeading from "@/components/MainHeading";
import ProjectOverview from "@/components/ProjectSection/ProjectOverview";

export default function Home() {
  return (
    <div>
      <div className={styles.intro}>
        <MainHeading title="Hello! I'm Natia"></MainHeading>
      </div>

      <div>
        <ContentDisplay title="Projects" className={styles.myProjects}>
          <ProjectOverview></ProjectOverview>
        </ContentDisplay>
      </div>

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

            <ImageWithTape
              imageSrc="/memes/sheldon.jpg"
              imageWidth={400}
              imageHeight={400}
              rotation={4}
              className={styles.tapedImage}
            ></ImageWithTape>
          </div>
        </ContentDisplay>
      </section>

      <section id="experience" className={styles.experienceContainer}>
        <ContentDisplay title={"Experience"}>
          <div className={styles.experienceContainerWrapper}>
            {workExperiance.map((job, idx) => (
              <ExperienceDisplay key={idx} {...job} initialExpanded={idx < 2} />
            ))}
          </div>
        </ContentDisplay>
      </section>

      <section id="personal-details">
        <ContentDisplay title={"Personal Details"}>
          <PersonalDetails />
        </ContentDisplay>
      </section>
    </div>
  );
}

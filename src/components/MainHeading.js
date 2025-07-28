import ContentDisplay from "./ContentDisplay";
import ImageWithTape from "./ImageWithTape";
import ProjectOverview from "./ProjectSection/ProjectOverview";

import styles from "./MainHeading.module.css";
export default function MainHeading({ title, children }) {
  return (
    <div className={styles.headingContainer}>
      <ImageWithTape
        imageSrc="/heading/portrait.png"
        imageWidth={300}
        imageHeight={300}
        rotation={-2}
      ></ImageWithTape>

      <div className={styles.textWrapper}>
        <h1>{title}</h1>

        <div className={styles.aboutMeText}>
          <ContentDisplay title="A bit about me">
            <p className={styles.text}>
              After over a decade in the design field, I reached a point of
              stagnation, where each year felt like a repetition of the last. In
              2021, I decided to pursue a long-held dream: learning to code and
              transitioning to the tech industry. While doing so, I maintained
              part-time design work for a select clientele. Since then,
              I&apos;ve actively engaged in various courses and developed
              several small, self-contained projects. At the end of 2024, I had
              the opportunity to gain firsthand experience in the tech industry
              through an internship, which allowed me to observe and participate
              in the software development cycle.
            </p>
            <p>
              Currently, I&apos;m actively expanding my skill set by developing
              various web applications for private clientele. These include a
              joinery manufacturing list tool, informational and
              service-oriented websites for a bakery and for a ELD teacher,
              showcasing services and products. This work is not only about
              writing code, it&apos;s allowed me to immerse myself in full-stack
              development, working across both frontend and backend systems.
              I&apos;m using tools such as Docker based databases,
              Testcontainers for enhancing testing methodologies, and modern
              frameworks like Next.js and Tailwind CSS to build scalable,
              production-ready solutions. This hands-on experience continues to
              refine my ability to deliver robust and maintainable software.
            </p>
            <div className={styles.quoteContainer}>
              <blockquote>
                <p>
                  A learning experience is one of those things that says,
                  <span>
                    &quot; You know that thing you just did? Don&apos;t do
                    that.&quot;
                  </span>
                </p>
                <cite>
                  Douglas Adams,
                  <em>
                    The Salmon of Doubt: Hitchhiking the Galaxy One Last Time
                  </em>
                </cite>
              </blockquote>
            </div>
          </ContentDisplay>
        </div>
      </div>
    </div>
  );
}

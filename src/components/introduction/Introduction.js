import SectionCard from "../SectionCard";
import ImageWithTape from "../ImageWithTape";

import styles from "./Introduction.module.css";

export default function Introduction({ title, children }) {
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
          <SectionCard title="A bit about me">
            <div className={styles.text}>
              <p>
                After over a decade in the design field, I reached a point of
                stagnation, where each year felt like a repetition of the last.
                In 2021, I decided to pursue a long-held dream: learning to code
                and transitioning to the tech industry. While doing so, I
                maintained part-time design work for a select clientele. Since
                then, I&apos;ve actively engaged in various courses and
                developed several small, self-contained projects. At the end of
                2024, I had the opportunity to gain firsthand experience in the
                tech industry through an internship, which allowed me to observe
                and participate in the software development cycle.
              </p>
              <p>
                Currently, I&apos;m expanding my skill set by developing various
                web applications for private clientele. These include a joinery
                manufacturing list tool, informational and service-oriented
                websites for a bakery and for an ELD teacher, showcasing
                services and products. This work is not only about writing code,
                it&apos;s allowed me to immerse myself in full-stack
                development, working across both frontend and backend systems.
                I&apos;m using tools such as Docker based databases,
                Testcontainers for enhancing testing methodologies, and modern
                frameworks like Next.js and Tailwind CSS to build scalable,
                production-ready solutions. This hands-on experience continues
                to refine my ability to deliver robust and maintainable
                software.
              </p>
            </div>
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
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

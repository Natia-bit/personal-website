import Image from "next/image";
import PostIt from "./common/PostIt";

import information from "../data/personal/information";
import interests from "../data/personal/interests";
import presence from "../data/personal/presence";

import styles from "./PersonalDetails.module.css";

export default function PersonalDetails() {
  return (
    <div className={styles.personalContainer}>
      <div className={styles.information}>
        <h2>Persoanl Information</h2>
        <PostIt title="Contact">
          <p>email: {information.contact.email}</p>
        </PostIt>
        <PostIt title="Location">
          <p>{information.location}</p>
        </PostIt>

        <PostIt title="Legal">
          {information.legal.map((item, i) => (
            <p key={i}>
              {item.status}: {item.description}
            </p>
          ))}
        </PostIt>

        <PostIt title="Languages">
          {information.languages.map((lang, i) => (
            <p key={i}>
              {lang.language}: {lang.level}
            </p>
          ))}
        </PostIt>
      </div>

      <div className={styles.resume}>
        <h2>Resume</h2>
        <PostIt>
          <p>Download CV...</p>
          <a
            href="/resume/cv.pdf"
            download="Natisvili Natia CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/personal/download.svg"
              alt={"download"}
              width={60}
              height={60}
            ></Image>
          </a>
        </PostIt>

        <PostIt color="var(--color-muted)">
          <p>99 little bugs in the code, </p>
          <p>99 little bugs, </p>
          <p>Patch one down, compile it around, </p>
          <p>137 little bugs in the code... </p>
        </PostIt>
      </div>

      <div className={styles.presence}>
        <h2>Dev Presence</h2>
        {presence.map((profile, i) => (
          <PostIt key={i}>
            <span>{profile.name} </span>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {"[Link]" || "Oups! What happened to the link?"}
              <div className={styles.iconContainer}>
                <Image
                  src={profile.iconSrc}
                  alt={`${profile.name} icon`}
                  width={60}
                  height={60}
                  className={styles.icon}
                ></Image>
              </div>
            </a>
          </PostIt>
        ))}
      </div>

      <div className={styles.interests}>
        <h2>Interests</h2>
        {interests.map((item, i) => (
          <PostIt key={i}>
            <label>{item.name}</label>
            <p className={styles.description}>{item.description}</p>
          </PostIt>
        ))}
      </div>
    </div>
  );
}

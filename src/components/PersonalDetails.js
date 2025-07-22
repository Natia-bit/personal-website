import PostIt from "./PostIt";

import information from "../data/perosnal-information.json";
import presence from "../data/perosnal-presence.json";
import interests from "../data/perosnal-interests.json";
import styles from "./PersonalDetails.module.css";

export default function PersonalDetails() {
  return (
    <div className={styles.personalContainer}>
      <div className={styles.information}>
        <h2>Persoanl Information</h2>
        <PostIt title="Contact">
          <p>email: {information.contact.email}</p>
        </PostIt>

        <PostIt title="Languages">
          {information.languages.map((lang, i) => (
            <p key={i}>
              {lang.language}: {lang.level}
            </p>
          ))}
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
      </div>

      <div className={styles.resume}>
        <h2>Resume</h2>
        <PostIt>
          <p>Download CV</p>
        </PostIt>
      </div>

      <div className={styles.presence}>
        <h2>Dev Presence</h2>
        {presence.map((profile, i) => (
          <PostIt key={i}>
            <span>{profile.name}: </span>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              {profile.link || "Link not provided"}
            </a>
          </PostIt>
        ))}
      </div>

      <div className={styles.interests}>
        <h2>Interests</h2>
        <PostIt>
          {interests.map((item, i) => (
            <div key={i}>
              <label>{item.name}</label>
              <p>{item.description}</p>
            </div>
          ))}
        </PostIt>
      </div>
    </div>
  );
}

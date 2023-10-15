import styles from "../../App.module.css";
import photo from "../../utls/me.png";

export default function LandingSection() {
  return (
    <div id="landing" className={styles.landingSection}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={photo} alt="img" />
      </div>
      <p className={styles.greeting}>Hello, I am Abdurrahman</p>
      <br />
      <p className={styles.text}>
        A Cross-Platform Mobile App Developer, Specialized in{" "}
        <span className={styles.specialText}>React Native</span>.
      </p>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../App.module.css";

export default function Header() {
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: abdurrahmanms09@gmail.com",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/abdo.muhammad.99",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/19086227/abdurrahman-sayed",
    },
    {
      icon: faGithub,
      url: "https://github.com/Abdurrahman1299",
    },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.socialList}>
        {socials.map((social) => (
          <a
            href={social.url}
            target="blank"
            className={styles.social}
            key={social.icon + social.url}
          >
            <FontAwesomeIcon icon={social.icon} color="#fff" size="2x" />
          </a>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <a className={styles.link} href="#projects">
          Explore Projects
        </a>
      </div>
    </div>
  );
}

import styles from "../../../App.module.css";
import Project from "./Project";
import { PROJECTS } from "../../../utls/projects/";

export default function ProjectsSection() {
  return (
    <div className={styles.projectsSection} id="projects">
      <div className={styles.toEdit}>
        <h1 className={styles.projectsHead}>Featured Projects</h1>

        <div className={styles.projectsContainer}>
          {PROJECTS.map((project) => (
            <Project
              key={project.title}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              githubLink={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

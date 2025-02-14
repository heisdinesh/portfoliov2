import React from "react";
import styles from "./projectCover.module.scss";
import Image from "next/image";

const ProjectCover = ({ imageSrc, description, name, tech }) => {
  return (
    <div className={styles.projectCoverContainer}>
      <Image alt={description} className={styles.image} src={imageSrc} />
      <div className={styles.metaData}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.tech}>{tech}</p>
      </div>
    </div>
  );
};

export default ProjectCover;

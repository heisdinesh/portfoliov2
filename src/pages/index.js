import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { CustomImages } from "@/assets";

const Landing = () => {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <p className={styles.title}>
            I build <span>software</span>, design <span>experiences</span>, and
            market <span>ideas</span>.
          </p>
          <p className={styles.tagline}>
            {" "}
            Basically, I create, shape, and share.
          </p>
          <Image src={CustomImages.dineshImage} width={240} height={240} />
          <button className={styles.cta}>View Projects</button>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <p className={styles.about}>
            Hi, I’m Dinesh. I craft scalable software with intuitive
            experiences. Currently, I’m an SDE-1 at Simple Energy, building
            tools that drive businesses forward. Beyond designing and coding,
            you’ll find me trekking or exploring diverse cuisines. From
            open-source contributions to new career opportunities and exciting
            collaborations, I’m always eager to build something impactful.
          </p>
          <h2 className={styles.technical}>Technical Skills</h2>
          <div className={styles.skillsRow}>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>👨‍💻 Languages</div>
                <ul>
                  <li>JavaScript</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Rust</li>
                </ul>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>🖼 Frameworks/Libraries</div>
                <ul>
                  <li>NextJS</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                  <li>Jest</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>Prisma</li>
                </ul>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>🗃️ Database</div>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Mongo DB</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>🌐 API</div>
                <ul>
                  <li>REST</li>
                  <li>graphQL</li>
                </ul>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>🛠 Tools</div>
                <ul>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Postman</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
            <div className={styles.skillsContainer}>
              <div>
                <div className={styles.heading}>🎨 Design</div>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Illustrator</li>
                  <li>Canva</li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <button className={styles.resume}>Download Resume</button>
        </div>
      </section>
    </div>
  );
};

export default Landing;

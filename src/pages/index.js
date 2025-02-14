import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { CustomImages } from "@/assets";
import ProjectCover from "@/components/projectCover";
import Testimonials from "@/components/testimonials";

const Landing = () => {
  const projectList = [
    {
      name: "EWCE",
      description: "Website for College.",
      tech: "Figma | Adobe Illustrator",
      imageSrc: CustomImages.ewceCover,
    },
    {
      name: "Ruchi Meals",
      description: "Food Delivery App.",
      tech: "NextJS | Express | NodeJs| MongoDB | Google Analytics | Metabase",
      imageSrc: CustomImages.ruchiMealsCover,
    },
    {
      name: "Check In System",
      description: "Food Delivery App.",
      tech: "React | Express | MongoDB ",
      imageSrc: CustomImages.checkinSystem,
    },
    {
      name: "E-Gazette",
      description: "Newsletter for a club.",
      tech: "Adobe Illustrator",
      imageSrc: CustomImages.eGazette,
    },
  ];
  const testimonialsList = [
    {
      author: "Roshaan Ray",
      designation: "Founder & CEO of SeedPaperIndia",
      quote: `It was a Pleasure to Work with Dinesh and would highly recommend him to any organisation or company, here were a few of the many advantage which I observed while working with him-
Very Quick at his work and delivers on time
Flexible and also uses his own Ideas
Has great design and IT Skills
Recently won a National Level Hackathon
Great to work with and has displayed leadership qualities in his Work!! Wishing him all the Success in the Future`,
    },
    {
      author: "Naiyaan",
      designation: "CTO of HealthSphere",
      quote: `Dinesh is a gifted logo-designer with a rare combination of patience, creative, and research skills. I’m lucky to have worked with Dinesh, his initial designs were spot on in terms of matching our brief, and he was able to articulate clearly and concisely why he had included particular features of the logo, how they would work to achieve our goals and appeal to our target market.`,
    },
  ];
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
          <Image
            alt="dinesh photo"
            priority
            src={CustomImages.dineshImage}
            width={240}
            height={240}
          />
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
      <section className={styles.projectSection}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>My Recent Work</h2>
          <p className={styles.tagline}>
            Here are a few past design projects I've worked on.
          </p>
        </div>
        <div className={styles.projectsContainer}>
          {projectList.map((project) => (
            <ProjectCover
              imageSrc={project.imageSrc}
              description={project.description}
              name={project.name}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
      <section className={styles.testimonialSection}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Testimonials</h2>
          <p className={styles.tagline}>What People Say About My Work</p>
        </div>
        <Testimonials />
      </section>
    </div>
  );
};

export default Landing;

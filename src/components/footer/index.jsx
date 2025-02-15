import React from "react";
import styles from "./footer.module.scss";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link
          className={styles.links}
          target="_blank"
          href="https://www.linkedin.com/in/heisdinesh"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className={styles.links}
          target="_blank"
          href="https://www.github.com/heisdinesh"
        >
          <FaGithub />
        </Link>
        <Link
          className={styles.links}
          target="_blank"
          href="https://www.behance.net/heisdinesh"
        >
          <FaBehance />
        </Link>
        <Link
          className={styles.links}
          target="_blank"
          href="https://www.behance.net/heisdinesh"
        >
          <FaXTwitter />
        </Link>
      </div>
      <div className={styles.copyrights}>
        <p className={styles.text}>© Copyright 2025 . Made by Dinesh</p>
      </div>
    </div>
  );
};

export default Footer;

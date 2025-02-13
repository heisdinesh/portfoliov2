import React from "react";
import styles from "./blogCover.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const BlogCover = ({
  image_source,
  title,
  reading_time_minutes,
  published_at,
  blog_link,
}) => {
  const router = useRouter();
  const handle_blog_click = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={() => handle_blog_click(blog_link)}
      className={styles.blogCover}
    >
      <img className={styles.coverImage} src={image_source} />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.metaData}>
          <p className={styles.publishedAt}>{published_at}</p>
          <p className={styles.readingTimeMinutes}>
            {reading_time_minutes} min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCover;

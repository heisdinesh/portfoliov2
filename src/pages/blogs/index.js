import React from "react";
import styles from "./blogs.module.scss";
import BlogCover from "@/components/blogCover";

const Blogs = () => {
  const blogList = [
    {
      type_of: "article",
      id: 1873850,
      title: "Understanding the Factory Design Pattern with Node.js",
      description:
        "Design patterns are a crucial part of software engineering, helping to create robust, scalable, and...",
      readable_publish_date: "Jun 3 '24",
      slug: "understanding-the-factory-design-pattern-with-nodejs-1ihm",
      path: "/heisdinesh/understanding-the-factory-design-pattern-with-nodejs-1ihm",
      url: "https://dev.to/heisdinesh/understanding-the-factory-design-pattern-with-nodejs-1ihm",
      comments_count: 0,
      public_reactions_count: 4,
      collection_id: null,
      published_timestamp: "2024-06-03T04:44:33Z",
      language: "en",
      subforem_id: null,
      positive_reactions_count: 4,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F849zc2dkloz053s8d5iq.png",
      social_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F849zc2dkloz053s8d5iq.png",
      canonical_url:
        "https://dev.to/heisdinesh/understanding-the-factory-design-pattern-with-nodejs-1ihm",
      created_at: "2024-06-02T17:21:57Z",
      edited_at: null,
      crossposted_at: null,
      published_at: "2024-06-03T04:44:33Z",
      last_comment_at: "2024-06-03T04:44:33Z",
      reading_time_minutes: 3,
      tag_list: [
        "designpatterns",
        "factorydesignpattern",
        "factorymethod",
        "node",
      ],
      tags: "designpatterns, factorydesignpattern, factorymethod, node",
      user: {
        name: "Dinesh A",
        username: "heisdinesh",
        twitter_username: null,
        github_username: "heisdinesh",
        user_id: 916552,
        website_url: "https://www.heisdinesh.me",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
      },
    },
    {
      type_of: "article",
      id: 1714352,
      title: "Smart India Hackathon 2023 winners",
      description:
        "Silence enveloped the room; all eyes focused on the podium, and every ear eagerly awaited the...",
      readable_publish_date: "Jan 2 '24",
      slug: "smart-india-hackathon-2023-winners-471",
      path: "/heisdinesh/smart-india-hackathon-2023-winners-471",
      url: "https://dev.to/heisdinesh/smart-india-hackathon-2023-winners-471",
      comments_count: 0,
      public_reactions_count: 5,
      collection_id: null,
      published_timestamp: "2024-01-02T09:31:58Z",
      language: "en",
      subforem_id: null,
      positive_reactions_count: 5,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foblwxr6bpaq9ah3cq7zi.jpeg",
      social_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foblwxr6bpaq9ah3cq7zi.jpeg",
      canonical_url:
        "https://dev.to/heisdinesh/smart-india-hackathon-2023-winners-471",
      created_at: "2024-01-02T06:20:23Z",
      edited_at: null,
      crossposted_at: null,
      published_at: "2024-01-02T09:31:58Z",
      last_comment_at: "2024-01-02T09:31:58Z",
      reading_time_minutes: 4,
      tag_list: ["hackathon", "smartindiahackthon", "sih"],
      tags: "hackathon, smartindiahackthon, sih",
      user: {
        name: "Dinesh A",
        username: "heisdinesh",
        twitter_username: null,
        github_username: "heisdinesh",
        user_id: 916552,
        website_url: "https://www.heisdinesh.me",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
      },
    },
    {
      type_of: "article",
      id: 1657457,
      title:
        "Setting Up Unity Editor for Android AR App Development: A Step-by-Step Guide",
      description:
        "Unity, the powerful real-time 3D development engine, empowers a collaborative effort between artists,...",
      readable_publish_date: "Nov 5 '23",
      slug: "setting-up-unity-editor-for-android-ar-app-development-a-step-by-step-guide-4pbb",
      path: "/heisdinesh/setting-up-unity-editor-for-android-ar-app-development-a-step-by-step-guide-4pbb",
      url: "https://dev.to/heisdinesh/setting-up-unity-editor-for-android-ar-app-development-a-step-by-step-guide-4pbb",
      comments_count: 0,
      public_reactions_count: 1,
      collection_id: null,
      published_timestamp: "2023-11-05T15:56:56Z",
      language: "en",
      subforem_id: null,
      positive_reactions_count: 1,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3onhgjgm5lil5qicl3mf.png",
      social_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3onhgjgm5lil5qicl3mf.png",
      canonical_url:
        "https://dev.to/heisdinesh/setting-up-unity-editor-for-android-ar-app-development-a-step-by-step-guide-4pbb",
      created_at: "2023-11-05T13:13:37Z",
      edited_at: null,
      crossposted_at: null,
      published_at: "2023-11-05T15:56:56Z",
      last_comment_at: "2023-11-05T15:56:56Z",
      reading_time_minutes: 3,
      tag_list: [],
      tags: "",
      user: {
        name: "Dinesh A",
        username: "heisdinesh",
        twitter_username: null,
        github_username: "heisdinesh",
        user_id: 916552,
        website_url: "https://www.heisdinesh.me",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
      },
    },
    {
      type_of: "article",
      id: 1518105,
      title: "Hackathon through organizers eye",
      description:
        "Most of you folks may have participated in various hackathons, but have you ever wondered what it...",
      readable_publish_date: "Jun 27 '23",
      slug: "hackathon-through-organizers-eye-14kl",
      path: "/heisdinesh/hackathon-through-organizers-eye-14kl",
      url: "https://dev.to/heisdinesh/hackathon-through-organizers-eye-14kl",
      comments_count: 0,
      public_reactions_count: 0,
      collection_id: null,
      published_timestamp: "2023-06-27T09:02:25Z",
      language: null,
      subforem_id: null,
      positive_reactions_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fznp0km5v1omrqr0ujzol.png",
      social_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fznp0km5v1omrqr0ujzol.png",
      canonical_url:
        "https://dev.to/heisdinesh/hackathon-through-organizers-eye-14kl",
      created_at: "2023-06-27T06:51:28Z",
      edited_at: null,
      crossposted_at: null,
      published_at: "2023-06-27T09:02:25Z",
      last_comment_at: "2023-06-27T09:02:25Z",
      reading_time_minutes: 2,
      tag_list: ["hackathon", "learning", "beginners", "development"],
      tags: "hackathon, learning, beginners, development",
      user: {
        name: "Dinesh A",
        username: "heisdinesh",
        twitter_username: null,
        github_username: "heisdinesh",
        user_id: 916552,
        website_url: "https://www.heisdinesh.me",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
      },
    },
    {
      type_of: "article",
      id: 1177757,
      title: "Smart India Hackathon 22 winners",
      description:
        "The winner for problem statement NR1174 is... team 01 Hum Bhi Bana Lenge, the moment we heard this...",
      readable_publish_date: "Aug 27 '22",
      slug: "smart-india-hackathon-22-winners-3em9",
      path: "/heisdinesh/smart-india-hackathon-22-winners-3em9",
      url: "https://dev.to/heisdinesh/smart-india-hackathon-22-winners-3em9",
      comments_count: 11,
      public_reactions_count: 27,
      collection_id: null,
      published_timestamp: "2022-08-27T19:23:16Z",
      language: "en",
      subforem_id: null,
      positive_reactions_count: 27,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1kuqsb7wjg2mpz1yo1h9.jpeg",
      social_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1kuqsb7wjg2mpz1yo1h9.jpeg",
      canonical_url:
        "https://dev.to/heisdinesh/smart-india-hackathon-22-winners-3em9",
      created_at: "2022-08-27T19:23:16Z",
      edited_at: "2022-12-11T12:12:03Z",
      crossposted_at: null,
      published_at: "2022-08-27T19:23:16Z",
      last_comment_at: "2024-11-18T21:04:40Z",
      reading_time_minutes: 3,
      tag_list: ["smartindiahackathon22", "sih22", "winners"],
      tags: "smartindiahackathon22, sih22, winners",
      user: {
        name: "Dinesh A",
        username: "heisdinesh",
        twitter_username: null,
        github_username: "heisdinesh",
        user_id: 916552,
        website_url: "https://www.heisdinesh.me",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F916552%2Fdc4cbbc7-d977-4835-bb83-a1c071083bb0.png",
      },
    },
  ];
  const shouldAddPlaceholder = blogList.length % 2 !== 0;
  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Blogs </p>
        <p className={styles.tagline}>
          Insights, stories, and ideas—freshly brewed for you!
        </p>
      </div>
      <div className={styles.blogContainer}>
        {blogList.map((blog) => (
          <BlogCover
            image_source={blog.cover_image}
            title={blog.title}
            reading_time_minutes={blog.reading_time_minutes}
            published_at={blog.readable_publish_date}
            blog_link={blog.canonical_url}
          />
        ))}
        {shouldAddPlaceholder && <div className={styles.placeholder}></div>}
      </div>
    </div>
  );
};

export default Blogs;

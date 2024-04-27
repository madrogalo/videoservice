import React from "react";
import Image from "next/image";
import aboutImage from "./Video with blogger doing review of smartphone.jpg";

import styles from "./about.module.css";

export const AboutPage = () => {
  return (
    <article className={styles.root}>
      <h2>About</h2>
      <Image
        className={styles.image}
        src={aboutImage}
        alt={"Video courses image"}
        priority={false}
      />
      <div className={styles.text}>
        <p>
          Welcome to our video courses site, your one-stop destination for
          comprehensive and engaging learning experiences. Whether you&apos;re a
          beginner or an expert seeking to expand your knowledge, our platform
          offers a diverse range of courses designed to meet your needs.
        </p>
        <p>
          Explore our extensive library of high-quality video courses covering a
          variety of topics, including technology, business, arts, personal
          development, and more. Each course is crafted by industry experts and
          seasoned educators, ensuring that you receive up-to-date content and
          valuable insights.
        </p>
        <p>
          With our user-friendly interface, you can easily navigate through
          courses, track your progress, and interact with instructors and fellow
          learners. Whether you prefer to learn at your own pace or participate
          in live sessions, our flexible learning options cater to your
          preferences and schedule.
        </p>
        <p>
          Join our vibrant learning community today and take your skills to the
          next level. Whether you&apos;re looking to advance your career, pursue
          a passion, or simply broaden your horizons, our video courses provide
          the tools and resources you need to succeed. Start your learning
          journey with us today!
        </p>
      </div>
    </article>
  );
};

export default AboutPage;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./testimonials.module.scss"; // Import your SCSS file

const testimonials = [
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

const Testimonials = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className={styles.swiperContainer}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <p className={styles.name}>- {testimonial.author}</p>
            <p className={styles.designation}>{testimonial.designation}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;

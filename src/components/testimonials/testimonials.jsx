import React from "react";
import "./testimonials.css";
import img1 from "../../assets/aiRobot.jpg";
import img2 from "../../assets/sky.jpg";
import img3 from "../../assets/aiWarrior.jpg";
// import img4 from "../../assets/money.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Do Client Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container test__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        >
        <SwiperSlide className="test">
          <div className="client__avatar">
            <img src={img1} alt="avatar_profile" />
          </div>
          <h5 className="client__name">Marshall Brandon</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            soluta, dicta sequi commodi unde, odio inventore quod quis est
            voluptas asperiores?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test">
          <div className="client__avatar">
            <img src={img2} alt="avatar_profile" />
          </div>
          <h5 className="client__name">Marshall Brandon</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            soluta, dicta sequi commodi unde, odio inventore quod quis est
            voluptas asperiores?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test">
          <div className="client__avatar">
            <img src={img3} alt="avatar_profile" />
          </div>
          <h5 className="client__name">Marshall Brandon</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            soluta, dicta sequi commodi unde, odio inventore quod quis est
            voluptas asperiores?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default testimonials;

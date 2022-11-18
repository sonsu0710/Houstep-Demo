// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components";


function MainSlide() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/*<SwiperSlide>*/}
                {/*    <CarouselImg>1</CarouselImg>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <CarouselImg>2</CarouselImg>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <CarouselImg>3</CarouselImg>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <CarouselImg>4</CarouselImg>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </>
    )
}

const CarouselImg = styled.img`
  //background-size: cover;
  //background-repeat: no-repeat;
  width: 450px;
  height: 295.5px;
  border-radius: 20px;
  box-shadow: 5px 5px 9px -6px rgba(0, 0, 0, 0.59);
`

export {MainSlide}
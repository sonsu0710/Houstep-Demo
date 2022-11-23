// import Swiper core and required modules


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from "styled-components";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


function BannerSlide() {
    return (
        <>
            <Swiper
                style={{
                    width: "100wh",
                    height: "400px",
                    backgroundColor: "#FFF5F1",
                    borderRadius: "12px",
                }}
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={8}
                initialSlide={1}
                centeredSlides={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>추천사례 1</SwiperSlide>
                <SwiperSlide>추천사례 2</SwiperSlide>
                <SwiperSlide>추천사례 3</SwiperSlide>
            </Swiper>
        </>
    )
}


export {BannerSlide}
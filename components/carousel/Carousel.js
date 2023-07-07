import carousel from "@/styles/Carousel.module.css";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
const Carousel = () => {
    SwiperCore.use([Autoplay]);
    return ( 
        <>
            <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            >
                <SwiperSlide>
                    <div style={{position: "relative"}}>
                            <img
                                src="/img/carousel/caro1.png"
                                className="block w-full"
                                alt="Wild Landscape" />
                        <div className={`${carousel.textOnImg}`}>
                            <h1>Because <br/> immunity has an expiration date.</h1><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <button>read more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/carousel/caro2.png"
                        className="block w-full"
                        alt="Wild Landscape" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/carousel/caro3.png"
                        className="block w-full"
                        alt="Wild Landscape" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/carousel/caro4.png"
                        className="block w-full"
                        alt="Wild Landscape" />
                </SwiperSlide>
            </Swiper>
        </>
     );
}
 
export default Carousel;
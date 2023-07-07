import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import testi from "@/styles/Home.module.css";
import { useState, useEffect  } from "react";

const Testimonial = () => {

    const size = useWindowSize();
    
//     <div>
//         {size.width}px / {size.height}px
//     </div>
    SwiperCore.use([Autoplay]);
    return ( 
        <>
            <Swiper
            modules={[Autoplay]}
            slidesPerView={size.width < 768? 1 : 2}
            spaceBetween={15}
            loop={true}
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            >
                <SwiperSlide>
                <img
                        src="/img/testimonial/testi1.png"
                        className={`block w-full ${testi.webTesti}`}
                        alt="Wild Landscape" />
                <img
                        src="/img/testimonial/testi1Mobile.png"
                        className={`block w-full ${testi.mobTesti}`}
                        alt="Wild Landscape" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/testimonial/testi2.png"
                        className={`block w-full ${testi.webTesti}`}
                        alt="Wild Landscape" />
                <img
                        src="/img/testimonial/testi2Mobile.png"
                        className={`block w-full ${testi.mobTesti}`}
                        alt="Wild Landscape" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/testimonial/testi1.png"
                        className={`block w-full ${testi.webTesti}`}
                        alt="Wild Landscape" />
                <img
                        src="/img/testimonial/testi1Mobile.png"
                        className={`block w-full ${testi.mobTesti}`}
                        alt="Wild Landscape" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="/img/testimonial/testi2.png"
                        className={`block w-full ${testi.webTesti}`}
                        alt="Wild Landscape" />
                <img
                        src="/img/testimonial/testi2Mobile.png"
                        className={`block w-full ${testi.mobTesti}`}
                        alt="Wild Landscape" />
                </SwiperSlide>
            </Swiper>
        </>
     );
}
 
export default Testimonial;

function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
                width: undefined,
                height: undefined,
        });

        useEffect(() => {
                function handleResize() {
                        setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                });
                }
                window.addEventListener("resize", handleResize);
                handleResize();
                
                return () => window.removeEventListener("resize", handleResize);
        }, []); 

        return windowSize;
}
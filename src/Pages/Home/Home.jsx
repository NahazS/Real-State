import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Slide from "./Slide";
import { useContext, useEffect, useState } from "react";
import PropertyCard from "../Propertys/PropertyCard";
import { AuthContext } from "../../Provider/AuthProvider";
const Home = () => {
    const slides = [1,2,3]

    {/* <-------------------------------------------------------------- load the property property --------------------------------------------------------------> */}
    const [property, setProperty] = useState([])
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    },[])
    const popularProperty = property.slice(0,9)


    {/* <-------------------------------------------------------------- monitor the current slide(use for nav bar bg image) --------------------------------------------------------------> */}
    const {currentSlide,setCurrentSlide} = useContext(AuthContext)
    const handleSlideChange = (swiper) => {
        const slide = swiper.realIndex
        setCurrentSlide(slide)
    };
    
    return (
        <div>
            {/* <-------------------------------------------------------------- banner slider section --------------------------------------------------------------> */}
            <div>
                <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={{clickable: true}}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      loop={true}
                      onSlideChange={handleSlideChange}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      {slides.map((count) => (
                          <SwiperSlide key={count}>
                            <Slide count={count} />
                          </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            {/* <-------------------------------------------------------------- popular properties section --------------------------------------------------------------> */}
            <div className="mt-[120px]">
                <h2 className="font-bold mb-9 text-center">Popular Properties</h2>
                <div className="max-w-[1170px] px-3 sm:px-0 place-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
                    {
                        popularProperty.map(property => <PropertyCard key={property.id} property={property}></PropertyCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;
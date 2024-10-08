import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import banner1 from '../../assets/banner/banner 1.jpg'
import banner2 from '../../assets/banner/banner 2.jpg'
import banner3 from '../../assets/banner/banner 3.jpg'
import banner4 from '../../assets/banner/banner 4.jpg'
import banner5 from '../../assets/banner/banner 5.jpg'

const Banner = () => {
    return (
        <Swiper
      modules={[   Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="container mx-auto mySwiper"
    >
                                    {/* slide 1 */}
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='lg:relative bg-gradient-to-r from-slate-950 to-gray-950  w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={banner1} alt="" className="absolute opacity-70  w-full h-[450px] lg:h-[550px]  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-24 lg:pt-28 top-1 left-16 lg:left-24 w-2/3 lg:w-1/3">
          
          Welcome to Medicine Care
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-16 lg:top-48 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <a href="#appointment"><button className="absolute border p-3 border-white btn-outline text-xl font-semibold hover:bg-blue-950 hover:text-white text-left mt-12  lg:top-72 top-56 left-16 lg:left-24">Make an Appointment</button></a>
          </Fade>
        </div>
       </SwiperSlide>
                                   {/* slide 2 */}
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={banner2} alt="" className="absolute opacity-70  w-full h-[450px] lg:h-[550px]  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-20 lg:pt-20 top-1 left-16 lg:left-24  w-2/3 lg:w-1/3">
          
          Healthcare just for kids.
          Saving children.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-24 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <a href="#appointment"><button className="absolute border p-3 border-white btn-outline text-xl font-semibold hover:bg-blue-950 hover:text-white text-left mt-20  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></a>
          </Fade>
        </div>
       </SwiperSlide>
                                   {/* slide 3 */}
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={banner3} alt="" className="absolute opacity-70  w-full h-[450px] lg:h-[550px]  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-20 lg:pt-20 top-1 left-16 lg:left-24 w-2/3 lg:w-1/3">
          
          Medical services that
you can trust
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-12 lg:top-60 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <a href="#appointment"><button className="absolute border p-3 border-white btn-outline text-xl font-semibold hover:bg-blue-950 hover:text-white text-left mt-12  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></a>
          </Fade>
        </div>
       </SwiperSlide>
                                   {/* slide 4 */}
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={banner4} alt="" className="absolute opacity-70  w-full h-[450px] lg:h-[550px]  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-20 lg:pt-28 top-1 left-16 lg:left-24 w-2/3 lg:w-3/5">
          
          Medical excellence
every day.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-12 lg:top-52 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <a href="#appointment"><button className="absolute border p-3 border-white btn-outline text-xl font-semibold hover:bg-blue-950 hover:text-white text-left mt-8  top-56 lg:top-72 left-16 lg:left-24">Make an Appointment</button></a>
          </Fade>
        </div>
       </SwiperSlide>
                            {/* slide 5 */}
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={banner5} alt="" className="absolute opacity-70  w-full h-[450px] lg:h-[550px]  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-20 lg:pt-28 top-1 left-16 lg:left-24 w-2/3">
          
          Exceptional people.
Exceptional care.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-24 lg:top-44 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <a href="#appointment"><button className="absolute p-3 border border-white btn-outline text-xl font-semibold hover:bg-blue-950 hover:text-white text-left mt-24  top-56 lg:top-64 left-16 lg:left-24">Make an Appointment</button></a>
          </Fade>
        </div>
       </SwiperSlide>
    </Swiper>
    );
};

export default Banner;
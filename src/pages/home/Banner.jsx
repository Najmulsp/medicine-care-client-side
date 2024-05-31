import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
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
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
      loop={true}
      pagination={{ clickable: true }}
      className="container mx-auto"
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
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-20 lg:pt-28 top-1 left-16 lg:left-24 w-2/3 lg:w-1/3">
          
          Welcome to Medicine Care
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-12 lg:top-56 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
              <Link to="/allCraft"><button className="absolute btn btn-primary btn-outline text-xl font-semibold text-white text-left mt-6  lg:top-80 top-56 left-16 lg:left-24">Make an Appointment</button></Link>
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
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-1/3">
          
          Healthcare just for kids.
Saving children.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-primary btn-outline text-xl font-semibold text-white text-left mt-6  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></Link>
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
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-1/3">
          
          Medical services that
you can trust
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-primary btn-outline text-xl font-semibold text-white text-left mt-6  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></Link>
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
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-1/3">
          
          Medical excellence
every day.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-primary btn-outline text-xl font-semibold text-white text-left mt-6  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></Link>
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
            className="text-4xl lg:text-6xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-2/3">
          
          Exceptional people.
Exceptional care.
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
          
          Entrust your health our doctors
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute p-2 border border-white  btn-outline text-xl font-semibold text-white text-left mt-6  top-56 lg:top-80 left-16 lg:left-24">Make an Appointment</button></Link>
          </Fade>
        </div>
       </SwiperSlide>
    </Swiper>
    );
};

export default Banner;
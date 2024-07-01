import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from '../../assets/our services/services111.jpg';
import slide2 from '../../assets/our services/services222.jpg';
import slide3 from '../../assets/our services/services333.jpg';
import slide4 from '../../assets/our services/services444.jpg';
import slide5 from '../../assets/our services/services555.jpg';
import slide6 from '../../assets/our services/services666.jpg';
import slide7 from '../../assets/our services/services777.jpg';



const OurServices = () => {
    return (
        <div>
            
            <section className="dark:bg-rose-50 dark:text-gray-800">
                
            <h1 className="text-2xl text-center  pt-8">Inside our medical these are our service departments</h1>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
        <div className="border lg:mt-24 bg-sky-500 w-full lg:col-span-3">
              <ul className="py-4 space-y-3 text-center">
                <li className="font-bold text-2xl pb-6">Departments</li>
                <li>Laboratory Analysis</li>
                <li>Pediatric Clinic</li>
                <li>Laryngological Clinic</li>
                <li>Outpatient Rehabilitation</li>
                <li>Gynaecological Clinic</li>
                <li>Ophthalmology Clinic</li>
                <li>Cardiac Clinicy</li>
                <li>Outpatient Surgery </li>
              </ul>
            </div>
			<div className="p-6 space-y-2 lg:col-span-8">
                
                    {/* second div */}
                    
            <section className=" dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-9">
		<div className="space-y-2 ">
			<p className="font-serif text-sm text-sky-400 ">Innovation</p>
			<h2 className="text-3xl font-bold">Our Services</h2>
		</div>

        <Swiper
        slidesPerView={3}
        breakpoints={{
            // when window width is >= 320px
            200: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 3,
            },
          }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide1} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Pediatric Clinic</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Laryngological Clinic</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide3} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Outpatient Rehabilitation</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide4} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Gynaecological Clinic</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide5} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Ophthalmology Clinic</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide6} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Cardiac Clinic</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>
        <SwiperSlide>
        <article className="flex  lg:w-52 flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={slide7} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Outpatient Surgery</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					
				</div>
			</article>
            </SwiperSlide>       
        
     </Swiper>
	</div>
</section>
			</div>
		</a>
	</div>
</section>
        </div>
    );
};

export default OurServices;
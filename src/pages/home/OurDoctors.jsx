import doctor1 from '../../assets/doctors/Doctors1.jpg';
import doctor2 from '../../assets/doctors/Doctors2.jpg';
import doctor3 from '../../assets/doctors/Doctors3.jpg';
import doctor4 from '../../assets/doctors/Doctors4.jpg';
import { MdPhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";



const OurDoctors = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-1 ">
			<p className="font-serif text-sm text-sky-400 ">Professionals</p>
			<h2 className="text-3xl font-bold">Our Doctors</h2>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={doctor1} />
				</a>
				<div className="flex flex-col flex-1 p-6 border border-gray-300 border-t-gray-100">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline text-sky-400">Dr. Michael Linden</a>
                    <p>Throat Specialist</p>
                    <hr className=" mt-4 mb-2"/>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <hr className="w-full mt-2 mb-2"/>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdPhoneAndroid /></span>
						<span>+1-212-333-7078</span>
                        
					</div>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdOutlineMail /></span>
						<span>example@example.com</span>
                        
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50 border border-gray-300 border-t-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={doctor2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline text-sky-400">Dr. Max Turner</a>
                    <p>Cardiologist</p>
					<hr className=" mt-4 mb-2"/>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <hr className="w-full mt-2 mb-2"/>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdPhoneAndroid /></span>
						<span>+1-212-333-7078</span>
                        
					</div>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdOutlineMail /></span>
						<span>example@example.com</span>
                        
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50 border border-gray-300 border-t-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={doctor3} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline text-sky-400">Dr. Amy Adams</a>
                    <p>Rehabilitation Therapy</p>
					<hr className=" mt-4 mb-2"/>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <hr className="w-full mt-2 mb-2"/>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdPhoneAndroid /></span>
						<span>+1-212-333-7078</span>
                        
					</div>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdOutlineMail /></span>
						<span>example@example.com</span>
                        
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50 border border-gray-300 border-t-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={doctor4} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline text-sky-400">Dr. Julia Jameson</a>
                    <p>Pediatrist</p>
					<hr className=" mt-4 mb-2"/>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <hr className="w-full mt-2 mb-2"/>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdPhoneAndroid /></span>
						<span>+1-212-333-7078</span>
                        
					</div>
					<div className="flex flex-wrap items-center pt-3 space-x-6 text-xs dark:text-gray-600">
						<span><MdOutlineMail /></span>
						<span>example@example.com</span>
                        
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
        </div>
    );
};

export default OurDoctors;
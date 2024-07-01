import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import OurServices from "./OurServices";
import WeProvides from "./WeProvides";
import OurDoctors from "./OurDoctors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medicine Care | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <WeProvides></WeProvides>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
            <OurDoctors></OurDoctors>
            <Faq></Faq>
        </div>
    );
};

export default Home;
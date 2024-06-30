import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import OurServices from "./OurServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medicine Care | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;
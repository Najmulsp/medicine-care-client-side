import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medicine Care | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
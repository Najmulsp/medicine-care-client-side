import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medicine Care | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Feature from "../Feature/Feature";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Order></Order>
            <Feature></Feature>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <FeatureMenu></FeatureMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <Feature></Feature>
            <Menu></Menu>
            <CallUs></CallUs>
        </div>
    );
};

export default Home;
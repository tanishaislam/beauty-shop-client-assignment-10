import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Banner from "../Navber/Banner";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navber></Navber>
            </div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
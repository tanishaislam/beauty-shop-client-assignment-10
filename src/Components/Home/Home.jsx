import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navber></Navber>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
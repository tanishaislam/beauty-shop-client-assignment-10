import { useLoaderData } from "react-router-dom";
import Banner from "../Navber/Banner";
import Footer from "../Navber/Footer";
import Services from "../Navber/Services";
import AllProducts from "../Product/AllProducts";
import Brands from "../Product/Brands";
import WorkUs from "../Navber/WorkUs";

const Header = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Brands></Brands>
            <AllProducts products={products}></AllProducts>
            <WorkUs></WorkUs>
            <Footer></Footer>
        </div>
    );
};

export default Header;
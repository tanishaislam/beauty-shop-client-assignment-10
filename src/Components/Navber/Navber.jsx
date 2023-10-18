import { NavLink } from "react-router-dom";

const Navber = () => {
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1 text-2xl font-semibold">
            <img className="h-16 pr-3" src="https://i.ibb.co/18KPxxN/logo.jpg" alt="logo" border="0"/> Supper Food
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-8 text-md font-medium">
                {navlinks}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navber;
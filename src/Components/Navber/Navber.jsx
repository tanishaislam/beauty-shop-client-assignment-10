import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Providers/AuthProviders";

const Navber = () => {
    const {user, logOutUser}= useContext(AuthContext);
    const handleSignOut = ()=>{
        logOutUser()
        .then()
        .catch()
    }
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        
    </>
    return (
        <div>
             {
                    user? <span className="font-semibold flex justify-center py-1 text-sm bg-red-300">{user.email}</span>: ''
            }
            <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                {navlinks}
                </ul>
                </div>
                <div className="flex-1 text-2xl font-semibold">
            <div className="flex items-center">
            <img className="h-16 pr-3" src="https://i.ibb.co/18KPxxN/logo.jpg" alt="logo" border="0"/> Supper Food
            </div>
            </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                user ? 
                <>
                <button onClick={handleSignOut} className='bg-orange-500 text-white py-2 px-5 rounded-md font-semibold'>sign out</button></>
                :
            
                <NavLink to='/login' className='bg-orange-500 text-white py-2 px-5 rounded-md font-semibold'>Login</NavLink>
            
            }
            </div>
            
            </div>
           
        </div>
    );
};

export default Navber;
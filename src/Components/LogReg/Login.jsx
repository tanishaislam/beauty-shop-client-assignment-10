import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/Providers/AuthProviders";


const Login = () => {
    const {signInUser, googleSignIn} = useContext(AuthContext)
    const handleRegisterUser =(e)=>{
        e. preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => console.error(error))
    }
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
            
        })
    }
    return (
        <div>
            <div className="hero h-[90vh] container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10">
            <div className="w-1/3">
                <img src="https://i.ibb.co/mXCrjRB/istockphoto-1190330112-612x612.jpg" alt="" />
            </div>
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 px-7">
                <h1 className="text-2xl font-bold mb-4 text-center pt-10">Please <span className="text-orange-500">Login now!</span></h1>
                <p className="text-center"> laborum cum iure temporibus rerum. Totam, repellat voluptatem.</p>
                <form onSubmit={handleRegisterUser} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-yellow-300 text-white border-none">Login</button>
                    <button onClick={handleGoogleSignIn} className=" mt-5 btn btn-primary bg-green-600 text-white border-none">Sign In Google</button>
                    </div>
                    <p className="text-center text-black py-6">Do not have an account ? <Link to="/register" className="text-orange-500 font-bold">Please Register</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;
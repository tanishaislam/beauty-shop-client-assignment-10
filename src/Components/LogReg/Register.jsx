import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero h-[90vh] container mx-auto flex justify-center lg:flex-row flex-col items-center">
            <div className="w-1/3">
                <img src="https://i.ibb.co/mXCrjRB/istockphoto-1190330112-612x612.jpg" alt="" />
            </div>
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 px-7">
                <h1 className="text-2xl font-bold mb-4 text-center pt-10">Please <span className="text-orange-500">Register now!</span></h1>
                <p className="text-center"> laborum cum iure temporibus rerum. Totam, repellat voluptatem.</p>
                <form className="card-body">
                    <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="flex gap-5 lg:flex-row flex-col">
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
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-yellow-300 text-white border-none">Login</button>
                    </div>
                    <p className="text-center text-black py-6">Already have an account ? <Link to="/login" className="text-orange-500 font-bold">Please Login</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;
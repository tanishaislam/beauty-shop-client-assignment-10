import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-28">
            <div className="flex justify-center h-[60vh]">
            <img src="https://i.ibb.co/ScqQXsv/error.png" alt="" />
            </div>
            <p className="uppercase text-xl text-red-500 font-semibold pb-7">The page dose not exist .</p>
            <Link to='/' className="bg-zinc-700 text-white py-2 px-5 rounded-lg ">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
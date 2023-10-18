import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-28">
            <div className="flex justify-center h-[60vh]">
            <img src="https://i.ibb.co/PhGb4y4/985748436085f06bb2bd63686ff491a5.jpg" alt="" />
            </div>
            <Link to='/' className="bg-zinc-700 text-white py-2 px-5 rounded-lg ">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
import { CiDeliveryTruck , CiLocationOn} from 'react-icons/ci';
import { SiJuce } from 'react-icons/si';
import { MdOutlineFastfood } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';


const Services = () => {
    return (
        <div className='container mx-auto'>
            <h1 className="text-center font-bold text-5xl py-14">Our serviecs</h1>
            <div className='grid grid-cols-3 gap-5 mb-20'>
                <div className='text-center'>
                    <CiDeliveryTruck className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></CiDeliveryTruck>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Food Delivery</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className='text-center'>
                    <SiJuce className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></SiJuce>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Grocery Delivery</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className='text-center'>
                    <MdOutlineFastfood className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></MdOutlineFastfood>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Drive In Resturent</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className='text-center'>
                    <AiOutlineShopping className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></AiOutlineShopping>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Grocery Shopping</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className='text-center'>
                    <CiLocationOn className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></CiLocationOn>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Join Merchant</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className='text-center'>
                    <CgProfile className='text-8xl bg-red-400 text-white p-4 rounded-2xl shadow-2xl shadow-red-500 my-5 m-auto'></CgProfile>
                    <h2 className='text-3xl font-bold my-4 pt-3'>Join Courier</h2>
                    <p className='text-lg text-zinc-500 w-1/2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
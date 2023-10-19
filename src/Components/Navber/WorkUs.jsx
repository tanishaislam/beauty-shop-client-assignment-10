

const WorkUs = () => {
    return (
        <div className="py-32 container mx-auto px-5">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center pb-16">Work With Us</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="card card-compact  bg-base-100 shadow-xl py-7">
            <div className="card-body text-center">
                <h2 className="card-title text-3xl font-bold flex justify-center">Become Driver</h2>
                <p className="text-lg py-3">dolor sit amet consectetur adipisicing elit. Dolor, deserunt? ipsum </p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-yellow-300 text-white border-none">Learn More</button>
                </div>
            </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl py-7">
            <div className="card-body text-center">
                <h2 className="card-title text-3xl font-bold flex justify-center">Become Partner</h2>
                <p className="text-lg py-3">dolor sit amet consectetur adipisicing elit. Dolor, deserunt? ipsum </p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-yellow-300 text-white border-none">Learn More</button>
                </div>
            </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl py-7">
            <div className="card-body text-center">
                <h2 className="card-title text-3xl font-bold flex justify-center">Become Merchant</h2>
                <p className="text-lg py-3">dolor sit amet consectetur adipisicing elit. Dolor, deserunt? ipsum </p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-yellow-300 text-white border-none">Learn More</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default WorkUs;
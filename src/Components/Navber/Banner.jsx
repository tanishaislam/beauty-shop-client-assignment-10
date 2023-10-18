

const Banner = () => {
    return (
        <div>
            <div className=" bg-no-repeat bg-cover bg-[url('https://i.ibb.co/0M9p1Gr/ella-olsson-o-PBj-WBCc-AEo-unsplash.jpg')]">
            <div className="text-center h-[80vh] flex justify-center items-center flex-col bg-white bg-opacity-60">
                <div data-aos="fade-up"  data-aos-duration="1000">
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-extrabold font-norican text-black">Order Your Food & Enjoy <br /> The Test</h1>
                <p className="text-lg mt-8 lg:w-1/2 md:w-1/2 w-auto m-auto text-zinc-700 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam corrupti officia facere omnis, natus beatae in neque porro, nihil maxime sunt. Dolores aut mollitia nihil .</p>
                <button className="bg-gradient-to-r from-orange-600 to-yellow-300 text-white py-3 px-7 text-lg font-semibold rounded-lg mt-5">Order Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;
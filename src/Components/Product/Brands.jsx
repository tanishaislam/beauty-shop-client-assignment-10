import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [users, setUsers]= useState([]);
    // const [brandPro, setBrandPro]= useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/brand')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    
        // const handleSub =(id)=>{
        //     console.log(id)
        //     fetch('http://localhost:5000/products')
        //     .then(res => res.json())
        //     .then(data=> {
        //     setBrandPro(data)
        //     })
        //     const bran = brandPro.find(brandPro.brand === id)
        //     console.log(bran)
        // }
    return (
        <div className="">
             <div className="text-center pb-16 pt-5">
                <h1 className="text-4xl font-bold ">Product <span className="text-orange-500">Collection</span></h1>
                <p className="text-lg font-semibold mt-4 w-1/2 m-auto"> consectetur adipisicing elit. Vero nam perferendis quis aliquid dolores hic dignissimos necessitatibus esse quia quo, facilis provident nobis.</p>
            </div>
            <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-14 px-5 container mx-auto">
           
            {
                users.map(user => <div key={user.id}>
                <Link to={`/service/${user.brandName}`} >
                <div  className="card card-compact bg-base-100 shadow-xl h-80">
                <figure><img src={user.image} alt="Shoes" className="" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title flex justify-center">{user.brandName}</h2>
                </div>
                </div>
                </Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default Brands;
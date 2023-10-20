import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AllBrand from "./AllBrand";


const AddBrand = () => {
    const [brandDetails , setBrandDetails] = useState([]);
    const {brand} = useParams();
    const viewServie = useLoaderData();
    console.log(viewServie, brand)
    useEffect(()=>{
        const findService = viewServie?.filter(loader => brand.includes(loader.brand))
        setBrandDetails(findService)
    },[brand, viewServie])
    console.log(brandDetails)
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto gap-7 mt-20 px-5">
            {
                brandDetails?.map(brandDetail=> <AllBrand key={brandDetail._id} brandDetail={brandDetail}></AllBrand>)
            }
            
        </div>
    );
};

export default AddBrand;
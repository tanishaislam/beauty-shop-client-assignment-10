import { Link } from "react-router-dom";

const AllBrand = ({brandDetail}) => {
    const { _id, category,imge,price,description,rating} = brandDetail;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-96">
                <figure><img src={imge} alt="Shoes" className="" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title flex justify-center">{category}</h2>
                    <div>
                    <div className="rating">
                    <input type="radio" name={`rating-${rating}`} className="mask mask-star" />
                    <input type="radio" name={`rating-${rating}`} className="mask mask-star" />
                    <input type="radio" name={`rating-${rating}`} className="mask mask-star" checked />
                    <input type="radio" name={`rating-${rating}`} className="mask mask-star" />
                    <input type="radio" name={`rating-${rating}`} className="mask mask-star" />
                    </div>
                    </div>
                    <p><span className="font-semibold">Price :</span> {price} $</p>
                    <p>{description}</p>
                    <Link>
                    <button className="bg-red-500 text-white py-1 px-10 rounded-lg">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                    <button className="bg-green-500 text-white py-1 px-10 rounded-lg">Upadte</button>
                    </Link>
                </div>
                </div>
        </div>
    );
};

export default AllBrand;
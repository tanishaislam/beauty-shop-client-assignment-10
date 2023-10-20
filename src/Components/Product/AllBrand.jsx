
const AllBrand = ({brandDetail}) => {
    const { category,imge,price,description,rating} = brandDetail;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-80">
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
                </div>
                </div>
        </div>
    );
};

export default AllBrand;
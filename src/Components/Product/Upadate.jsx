import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Upadate = () => {
    const upProduct = useLoaderData();
    const { _id,category,imge,price,description,rating} =upProduct;

    const handleUpdateProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const imge = form.imge.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updateProduct = { category,imge,price,description,rating}
        console.log(updateProduct)
        fetch(`http://localhost:5000/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Product Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <div className="container mx-auto ">
            <div>
            <form onSubmit={handleUpdateProduct}>
                <div className="flex justify-center lg:h-[80vh] h-full items-center flex-col bg-gradient-to-r from-orange-600 to-yellow-300">
                    
                    <div className="text-center">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white pb-5 pt-5">Update Product</h1>
                        <p className="text-lg font-semibold w-1/2 m-auto pb-10"> Laboriosam hic at sint quasi labore, in maiores sequi, odio, sapiente quas earum necessitatibus! Ut, debitis. Facere atque debitis blanditiis incidunt qui?</p>
                    </div>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Category</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Rating</span>
                        </label>
                        <label className="input-group">
                        <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                    </div>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Image URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="imge" defaultValue={imge} placeholder="Image URL" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Price</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                    </div>
                   <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Short description</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        
                   </div>
                   <div className=" pb-5">
                    <input type="submit" value="Update Product" className="py-3 bg-white text-orange-600 px-8 rounded-lg font-bold mt-8" />
                    </div>
                    
                    
                    
                </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Upadate;
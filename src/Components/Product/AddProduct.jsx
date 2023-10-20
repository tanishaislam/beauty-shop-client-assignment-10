import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const category = form.category.value;
        const imge = form.imge.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {brand, category,imge,price,description,rating}
        console.log(newProduct)
        fetch('https://beauty-shop-server-4abhz8d42-evas-projects-a5c76b5d.vercel.app/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="container mx-auto ">
            <div>
            <form onSubmit={handleAddProduct}>
                <div className="flex justify-center lg:h-[80vh] h-full items-center flex-col bg-gradient-to-r from-orange-600 to-yellow-300">
                    
                    <div className="text-center">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white pb-5 pt-5">Add New Product</h1>
                        <p className="text-lg font-semibold w-1/2 m-auto pb-10"> Laboriosam hic at sint quasi labore, in maiores sequi, odio, sapiente quas earum necessitatibus! Ut, debitis. Facere atque debitis blanditiis incidunt qui?</p>
                    </div>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Brand Name</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Category</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                    </div>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Image URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="imge" placeholder="Image URL" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Price</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                    </div>
                   <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Short description</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="description" placeholder="Short description" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Rating</span>
                        </label>
                        <label className="input-group">
                        <input type="number" name="rating" placeholder="Rating" className="input lg:w-96 w-auto" required />
                        </label>
                        </div>
                   </div>
                   <div className=" pb-5">
                    <input type="submit" value="Add Product" className="py-3 bg-white text-orange-600 px-8 rounded-lg font-bold mt-8" />
                    </div>
                    
                    
                    
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
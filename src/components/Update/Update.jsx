import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loader = useLoaderData();
    console.log(loader);
    const {description,img,name,price,product,rating,_id,brandName}=loader;
    
const handleSubmit = e=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value ;
    const image = form.image.value ;
    const type = form.type.value;
    const price = form.price.value ;
    const rating = form.rating.value ;
    const des = form.des.value ;
    const brandName = form.brandName.value ;
    const addProduct = {name,image,type,price,brandName,rating,des}
    console.log(addProduct);

    fetch(`https://assainment-10-server-side.vercel.app/brand/${_id}`,{
        method:'PATCH',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(addProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}


    return (
        <div>
                <form onSubmit={handleSubmit}>
                <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text"> Name</span>
                </label>
                <label className="input-group">
                
                <input type="text"defaultValue={name} name="name" placeholder="Enter Name"required className="input w-full input-bordered" />
                </label>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Image Url</span>
                </label>
                <label className="input-group">
                
                <input type="text"defaultValue={img} name="image" placeholder="Enter image url"required className="input input-bordered w-full" />
                </label>
                </div>
                </div>


                <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Type of product</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="type" defaultValue={product} placeholder="Enter type" className="input w-full input-bordered" />
                </label>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                
                <input type="text"defaultValue={price} name="price" placeholder="Enter price"required className="input input-bordered w-full" />
                </label>
                </div>
                </div>


                <div className="md:flex gap-5 mb-5">
                <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">BrandName</span>
                </label>
                <label className="input-group">
                
                <input type="text"defaultValue={brandName} name="brandName" placeholder="Enter brandName"required className="input input-bordered w-full" />
                </label>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                
                <input type="text"defaultValue={rating} name="rating" placeholder="Enter rating" className="input input-bordered  w-full" />
                </label>
                </div>

                </div>

                <div className="form-control w-full">
                <label className="label">
                <span className="label-text">Short description</span>
                </label>
                <label className="input-group">
                
                <textarea className="border p-5" name="des"defaultValue={description} placeholder="Enter short description " id="" cols="100" rows="5"></textarea>
                </label>
                </div>
                <input type="submit"required value="Add product" className="btn space-y-10 mb-5 btn-block text-white bg-[red] mt-4"/>
            </form>
        </div>
    );
};

export default Update;
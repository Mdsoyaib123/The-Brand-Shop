import { useState } from "react";

const AddProduct = () => {
    const [brandName,setBrandName] = useState('')
    const {BrandName}=brandName
    // console.log(BrandName);

    const handleSubmit = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value ;
        const image = form.image.value ;
        const type = form.type.value;
        const price = form.price.value ;
        const rating = form.rating.value ;
        const des = form.des.value ;
        
        const addProduct = {name,image,type,price,BrandName,rating,des}
        console.log(addProduct);
        fetch('http://localhost:5000/brands',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
       
    }
    return (
        <div className="w-full my-5">
                <form onSubmit={handleSubmit}>
                <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text"> Name</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="name" placeholder="Enter Name" className="input w-full input-bordered" />
                </label>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Image Url</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="image" placeholder="Enter image url" className="input input-bordered w-full" />
                </label>
                </div>
                </div>


                <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Type of product</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="type" placeholder="Enter type" className="input w-full input-bordered" />
                </label>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="price" placeholder="Enter price" className="input input-bordered w-full" />
                </label>
                </div>
                </div>
                <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
            <label name="brandName">Choose a brandName :</label>
                <select onChange={(e) => setBrandName({ BrandName: e.target.value })} className="border py-4 px-4" id=""   required>

                    <option >select</option>
                    <option >google</option>
                    <option >apple</option>
                    <option >samsung</option>
                    <option >sony</option>
                    <option >intel </option>
                </select>
                </div>


            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                
                <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered  w-full" />
                </label>
                </div>

                </div>

                <div className="form-control w-full">
                <label className="label">
                <span className="label-text">Short description</span>
                </label>
                <label className="input-group">
                
                <textarea className="border p-5" name="des"placeholder="Enter short description " id="" cols="100" rows="5"></textarea>
                </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block text-white bg-[red] mt-4"/>
            </form>

    </div>
    );
};

export default AddProduct;
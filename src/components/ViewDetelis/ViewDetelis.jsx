import { useLoaderData, useParams } from "react-router-dom";

const ViewDetelis = () => {
    const loader = useLoaderData();
    const {name} = useParams();
    
    const filter = loader.find(item=> item.name === name)
    const {brandName,img,description,product,price}=filter ;
    const handleAddToCart =()=>{
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(filter)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="card card-side  p-5 my-10 bg-base-100 shadow-xl">
        <figure className="w-1/3 "><img  src={img} alt="Movie"/></figure>
        <div className="card-body pl-24 pt-20">
            <h2 className="card-title text-3xl font-bold ">{name}</h2>
            <h4>BrandName:    {brandName}</h4>
            <div className="flex justify-between">
            <p>Type:    {product}</p>
            
            <p className="text-xl font-bold">Price :  ${price}</p>
            </div>
            <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p>{description}</p>

            <div className="  justify-end">
            <button onClick={handleAddToCart} className="btn bg-[red] text-white">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default ViewDetelis;
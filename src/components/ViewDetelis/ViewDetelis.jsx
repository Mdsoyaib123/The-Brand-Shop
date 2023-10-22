import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewDetelis = () => {
    const loader = useLoaderData();
    const {name} = useParams();
    // console.log(loader);
    // console.log(name);
    
    // const filter = loader.find(item=> item.name === name)
    
    const {brandName,img,description,product,price,rating}=loader ;
    const handleAddToCart =()=>{
        fetch('https://assainment-10-server-side.vercel.app/cart',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loader)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire('You add a product successfully')
        })
    }
    return (
        <div className="card  lg:card-side  p-5 my-10 bg-base-100 shadow-xl">
        <figure className="w-1/2 mx-auto lg:w-1/3 "><img className="" src={img} alt="Movie"/></figure>
        <div className="card-body pl-24 pt-20">
            <h2 className="card-title text-3xl font-bold ">{name}</h2>
            <h4>BrandName:    {brandName}</h4>
            <div className="flex justify-between">
            <p>Type:    {product}</p>
            
            <p className="text-xl font-bold">Price :  ${price}</p>
            </div>
            <div className="rating">
            <p>Rating:  {rating}</p>
            </div>
            <p>{description}</p>

            <div className=" flex justify-center lg:justify-end ">
            <button onClick={handleAddToCart} className="btn bg-[red] text-white">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default ViewDetelis;
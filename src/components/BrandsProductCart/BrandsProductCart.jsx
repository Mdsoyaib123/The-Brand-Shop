/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandsProductCart = ({products}) => {
    const { name,brandName,product,price,img,rating} = products
  
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure><img className="h-44" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <div className="flex justify-between text-lg">
          <p>{product}</p>
          <p>Brand : {brandName}</p>
          </div>
          <div className="text-lg font-bold flex justify-between">
            <p>${price}</p>
            

            <p>Rating:  {rating}</p>
            

          </div>
          <div className="card-actions flex justify-between">
           <Link to={`http://localhost:5173/brands/${brandName}/${name}`}> <button  className="btn ">View detelis</button></Link>
            <Link to={`/brands/${name}`}><button className="btn ">Update</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BrandsProductCart;
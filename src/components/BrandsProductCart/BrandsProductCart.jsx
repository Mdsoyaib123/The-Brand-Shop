/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandsProductCart = ({products}) => {
    const { name,brandName,product,price,img,rating } = products
   
    return (
        <div className="card card-compact w-96 bg-base-300 mb-10 pt-4 shadow-xl">
        <figure><img className="h-44 rounded-lg" src={img} alt="Shoes" /></figure>
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
           <Link to={`/detelis/${name}`}> <button type="submit"  className="btn bg-[red] text-white ">View detelis</button></Link>
           <Link to={`/brand/${name}`}><button className="btn  bg-[red] text-white" type="submit ">Update</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BrandsProductCart;
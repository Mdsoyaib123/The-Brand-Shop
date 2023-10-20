/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
    // console.log(brand);
    return (
        <div className="">
           <Link to={`/brands/${brand.brandName}`}>
           <div className=" text-center h-[400px] rounded-lg  py-5 bg-base-300">
                <img  className="w-[300px] h-[300px] rounded mx-auto" src={brand.img} alt="" />
                <h2 className="text-4xl font-semibold py-4">{brand.brandName}</h2>
            </div>
           </Link>
        </div>
    );
};

export default BrandCard;
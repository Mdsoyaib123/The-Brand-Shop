
import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const Brands = () => {
    const [brands,setBrands]= useState([])
    useEffect(()=>{
         fetch('/brandData.json')
        .then(res=>res.json())
        .then(data=> setBrands(data))
    },[])
    
    return (
        <div className="my-28">
            <h1 className="text-5xl font-bold text-center py-7 ">Our Best Brands</h1>
            <div className="grid lg:grid-cols-3 gap-5  ">
           
           {
            brands.map((brand,index)=><BrandCard key={index}brand={brand}></BrandCard>)
           }
        </div>
        </div>
    );
};

export default Brands;
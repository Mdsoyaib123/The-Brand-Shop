import { useLoaderData } from "react-router-dom";
import BrandsProductCart from "../BrandsProductCart/BrandsProductCart";
import Slider from "../Slider/Slider";

const BrandProducts = () => {
    const loader = useLoaderData();
    // console.log(loader);
    
    return (
        <div>
            <Slider></Slider> 
        <div className="grid grid-cols-1 md:grid-cols-2 pl-5 lg:grid-cols-3 gap-5">
            {
                loader.map((products,index)=> <BrandsProductCart key={index}products={products}>{loader}</BrandsProductCart>)
            }
        </div>
        </div>
    );
};

export default BrandProducts;
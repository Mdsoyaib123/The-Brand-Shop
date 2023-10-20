import { useLoaderData } from "react-router-dom";
import BrandsProductCart from "../BrandsProductCart/BrandsProductCart";

const BrandProducts = () => {
    const loader = useLoaderData();
    // console.log(loader);
    
    return (
        <div>
            
        <div className="grid lg:grid-cols-3 gap-5">
            {
                loader.map((products,index)=> <BrandsProductCart key={index}products={products}>{loader}</BrandsProductCart>)
            }
        </div>
        </div>
    );
};

export default BrandProducts;
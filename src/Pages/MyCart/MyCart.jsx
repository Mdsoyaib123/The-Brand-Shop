import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import MyCartCard from "../../components/MyCartCard/MyCartCard";

const MyCart = () => {
    const loader = useLoaderData();
    // console.log(loader);
   
    return (
        <div>
            
            {
                loader.map(item=><MyCartCard key={item.name} item={item}>{loader}</MyCartCard>)
            }
        </div>
    );
};

export default MyCart;
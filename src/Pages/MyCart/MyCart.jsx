import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import MyCartCard from "../../components/MyCartCard/MyCartCard";

const MyCart = () => {
    const loader = useLoaderData();
    console.log(loader);
   const [user,setUser] = useState(loader)
//    console.log(user);
    return (
        <div className="grid lg:grid-cols-2 gap-5 px-20">
            
            {
                user.map(item=><MyCartCard key={item.name} setUser={setUser} user={user} item={item}></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;
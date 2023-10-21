import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import MyCartCard from "../../components/MyCartCard/MyCartCard";

const MyCart = () => {
    const loader = useLoaderData();
    // console.log(loader);
   const [user,setUser] = useState(loader)
//    console.log(user);
    return (
        <div>
            
            {
                user.map(item=><MyCartCard key={item.name} setUser={setUser} user={user} item={item}></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const MyCartCard = ({item}) => {
    
    const {name,img,brandName,price} =item
  
    
    const handleDelete=(name)=>{
        fetch(`http://localhost:5000/cart/${name}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('delet successfully')
            }
          
            
        })
    }
    return (
        <div className="card card-side w-1/2 mx-auto mb-5 bg-base-100 shadow-xl">
        <figure className="w-1/4"><img src={img} alt="Movie"/></figure>
        <div className="card-body pl-20 pt-10">
            <h2 className="card-title">{name}</h2>
            <p>brandName :   {brandName}</p>
            <p>{price}</p>
            <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(name)} className="btn bg-[red] text-white">Delete</button>
            </div>
        </div>
        </div>
    );
};

export default MyCartCard;
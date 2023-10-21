/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const MyCartCard = ({item,setUser,user} ) => {
    const {name,img,brandName,price} =item
    const handleDelete=(name)=>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${name}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);  
                    
                    const remening= user.filter(remeningData=> remeningData.name !== name)
                    setUser(remening)

                    Swal.fire({
                        icon: 'success',
                        title: 'Product deleted successfully',
                    
                      })
                })
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
            {/* <button onClick={()=>handleDelete(name)} className="btn bg-[red] text-white">Delete</button> */}
            <button onClick={()=>handleDelete(name)} type="submit" className="btn bg-[red] text-white">Delete</button>
            </div>
        </div>
        </div>
    );
};

export default MyCartCard;
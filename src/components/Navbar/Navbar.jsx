import { Link, NavLink } from "react-router-dom";
import navbar from './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            swal("LogOut Successfully");
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const links= <div className="isActive flex gap-10 text-base font-semibold">
      <NavLink  to='/'
        
    
        ><li>Home</li></NavLink>
      <NavLink  to='/addProduct'
       
    
      ><li>Add Product</li></NavLink>
      <NavLink  to='/myCart'
    
      
      ><li>My Cart </li></NavLink>

      
    </div>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div >
    <div className="block">
    <h1 className=" text-[red] normal-case font-bold text-3xl">The Brand Shop</h1>
    {/* <img className="w-3/4 " src="https://i.ibb.co/hHJR0Sy/title-img2.png" alt="" /> */}
    </div>

  </div>
  <div className="navbar-center hidden lg:flex items-center">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">

   
   
  

    {
        user ? <>
        <div className=" block px-10 ">
        <img  className="w-[50px] mx-auto rounded-full" src={user.photoURL} alt="" />
        <p className="text-center">{user.displayName}</p>
        </div>
        <button onClick={handleLogOut} className="btn font-semibold ">LogOut</button>
        </>
        :
        <Link to='/login'><button className="btn font-semibold ">Login</button></Link>
    }
   
  </div>
</div>
    );
};

export default Navbar;
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";
import {  updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import swal from "sweetalert";

const Register = () => {
    const {createUser} =useContext(AuthContext)
    const [error,setError] = useState('')

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|[\]\\:;<>,.?/~]).{6,}$/.test(password)        ){
            setError('password must be 6 characters and one  capital letter and  a special character')
          }
          else{
            setError('')

            createUser(email,password)
          .then(Result=>{
              console.log(Result.user);
              e.target.reset()
              swal("Registration successfully");
              
  
              updateProfile(auth.currentUser, {
                displayName: name, 
                photoURL: photo,
              })
              .then()
              .catch((error) => {
                console.log(error.message);
              });
            
          })   
          .catch(error=>{
              console.log(error);
              setError(error.message)
              
          })
          }




       
    }
    return (
        <div className="w-1/2 mx-auto">
        <h1 className="text-center mt-16 text-4xl font-bold">Register Now</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" placeholder="Enter your url" name="photo" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered"required  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <p className="text-red-500 ">{error}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
            <p className="mt-5">Already have an account please <Link className="text-xl font-bold text-red-600" to={'/login'}>Login</Link></p>
          </div>
        </form>
    </div>
    );
};

export default Register;
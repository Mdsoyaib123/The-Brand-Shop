import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";
import swal from "sweetalert";

const Login = () => {
    const {signIn,signInWithGoogle} =useContext(AuthContext)
    const [error,setError]= useState('')
    const location = useLocation()
  const Navigate = useNavigate()
    const handleLogin = e=>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value ;
        const password = form.password.value; 
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            swal('login successfully')
            Navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }
    const handleGoogleLogin = ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
             Navigate(location?.state ? location.state : '/')
           
        })
        .catch(error=>{
            console.log(error);
           
        })
    }

    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-center mt-16 text-4xl font-bold">Login Now</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="text-red-500">{error}</p>
                
                <button className="btn btn-primary my-2">Login</button>
                <h3 className="text-xl py-2 font-bold">Login with another way</h3>
                <button onClick={handleGoogleLogin} className="btn btn-neutral w-1/3">GOOGLE</button>
                <p className="mt-5">Do not have an account please <Link className="text-xl font-bold text-red-600" to={'/register'}>Register</Link></p>
              </div>
            </form>
        </div>
    );
};

export default Login;
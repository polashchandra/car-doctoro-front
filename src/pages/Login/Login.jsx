import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { Authprovider } from '../../Authcontext/AuthContext';


const Login = () => {
    const {signinUser}=useContext(Authprovider)
    const handleSignIn=evant=>{
        evant.preventDefault();
        const form=evant.target;
        const email=form.email.value;
        const password=form.password.value; 
        console.log(email,password);
        
        signinUser(email,password)
        .then(signinusers=>{
            const user=signinusers.user;
            console.log(user);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 mr-10">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-5 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <h1 className='text-4xl text-center'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="submit" />
                            </div>
                        </form>
                        <h2 className='text-center'> have a account <Link className='text-red-500 gap-2' to="/signup">SignUp</Link></h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
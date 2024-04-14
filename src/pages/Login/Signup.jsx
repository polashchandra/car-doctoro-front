import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { Authprovider } from '../../Authcontext/AuthContext';
const Signup = () => {
    const { createUser}=useContext(Authprovider);
    const handleSignup = event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(createUsers=>{
            const user=createUsers.user;
            console.log(user)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 mr-10">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-5 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <h1 className='text-4xl text-center'>Signup</h1>
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
                            <h2 className='text-center'> have a account <Link className='text-red-500 gap-2' to="/login">Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
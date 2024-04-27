import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import cheakout from '../../assets/images/checkout/checkout.png'
import { Authprovider } from '../../Authcontext/AuthContext';
import Swal from 'sweetalert2'
const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    const {user}=useContext(Authprovider);
    const handleSubmit = event => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const phone=form.phone.value;
        const bookingg={
            name,
            date,
            email,
            phone,
        }
        fetch('http://localhost:3000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookingg)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data. insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    };

    return (
        <div className="container mx-auto p-4">
            <img className='mb-10' src={cheakout} alt="" />
            <h2 className="text-xl font-bold mb-4">Checkout for {title}</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 md:flex md:items-center">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="firstName" type="text" name='name' placeholder="Jane" required />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="date" name='date' placeholder="Doe" required />
                    </div>
                </div>
                <div className="mb-4 md:flex md:items-center">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Your Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" name="tel" placeholder="+1234567890" required />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name='email' placeholder="email@example.com" required />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Order Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;


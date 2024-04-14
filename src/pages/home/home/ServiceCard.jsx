import React from 'react';
import { RiArrowRightLine } from "react-icons/ri";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt={title} className='w-full h-64 object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>${price}</p>
                    <div className="card-actions justify-end">
                        <button className='text-3xl'><RiArrowRightLine></RiArrowRightLine></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

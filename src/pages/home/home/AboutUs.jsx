import React from 'react';
import parts
    from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative lg:w-3/4'>
                        <img src={person} className="w-[550px]  h-[473px] rounded-lg shadow-2xl" />
                        <img src={parts} className="w-[327px] h-[332px] rounded-lg shadow-2xl absolute left-[300px] top-[225px] border-10 border-black" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className='text-red-500 font-bold'>AboutUs</h1>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
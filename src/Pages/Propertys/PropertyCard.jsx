import React from 'react';
import { IoLocationOutline, IoBedOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { PiBathtubBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
const PropertyCard = ({property}) => {

    const {id, estate_title, price, status, area, location, bedrooms, bathrooms, image} = property

    return (
        <Link to={`/all_property/${id}`}>
            <div className='w-[350px] h-fit rounded-[30px] shadow-xl hover:shadow-2xl active:shadow-inner text-[#001d38] group overflow-hidden cursor-pointer'>
                <div className='relative'>
                    <img className='rounded-t-[30px] w-full h-[232px] transform transition-transform duration-300 group-hover:scale-110' src={image} alt="" />
                    <button className={`btn ${status === "sale" ? 'bg-[#f2b06a]' : 'bg-[#ff5748]' } text-white border-none absolute top-[25px] left-[25px] rounded-3xl`}>For {status}</button>
                </div>
                <div className='p-[25px] flex flex-col gap-y-2'>
                    <h6>{estate_title}</h6>
                    <p className='flex items-center text-[#919191]'><IoLocationOutline /> <span>{location}</span></p>
                    <div className='text-white flex gap-x-2'>
                        <button className={`btn hover:bg-[#f2b06a] hover:bg-opacity-60 ${status === "sale" ? 'bg-[#f2b06a]' : 'bg-[#ff5748]' } border-none rounded-3xl`}>{status === "sale" &&  'From'}{price}</button>
                        <button className='btn hover:bg-[#f2b06a] hover:bg-opacity-60 bg-[#f2b06a] rounded-3xl border-none'>View Details</button>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between py-3 px-[25px]'>
                    <p className='flex gap-x-2 items-center'><FiBox/><span>{area}</span></p>
                    <p className='flex gap-x-2 items-center'><IoBedOutline/><span>{bedrooms} Bed</span></p>
                    <p className='flex gap-x-2 items-center'><PiBathtubBold/><span>{bathrooms} Bath</span></p>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
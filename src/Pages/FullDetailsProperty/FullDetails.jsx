import React from 'react';
import { FiBox } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtubBold } from 'react-icons/pi';
import { FaSackDollar } from "react-icons/fa6";
import { useLoaderData, useParams } from 'react-router-dom';

const FullDetails = () => {
    const properties = useLoaderData()
    const {id} = useParams()
    const selectedProperty = properties.find((property) => property.id == id)
    const {estate_title, segment_name, description, price, status, area, location, facilities, bedrooms, bathrooms, image} = selectedProperty
    console.log(selectedProperty)
    return (
        <div className="flex flex-col md:flex-row gap-x-12 max-w-[1170px] mx-auto mt-12 ">
            <div className="bg-[#f3f3f3] rounded-2xl h-full place-items-center w-[53.14%] relative">
                <img className="p-[30px] lg:p-[30px] h-[500px] w-full" src={image} alt="" />
                <button className={`btn ${status === "sale" ? 'bg-[#f2b06a]' : 'bg-[#ff5748]' } text-white border-none absolute top-[55px] left-[55px] rounded-3xl`}>For {status}</button>
            </div>
            <div className="md:max-w-[46.86%]">
                <h2 className="font-Playfair font-bold mb-4">{estate_title}</h2>
                <p className="text-[#424242] mb-6">{segment_name}</p>
                <hr className="mb-4" />
                <h5 className="text-[#424242] mb-4">{location}</h5>
                <hr className="mb-6" />
                <p className="text-[#131313] font-bold mb-6">Description: <span className="text-[#424242] font-normal">{description}</span></p>
                <div className="flex gap-x-3 mb-6 text-[#23BE0A] items-center">
                    <p className="text-[#131313] font-bold">Facilities</p>
                    <div className="flex flex-wrap gap-3">
                        {
                            facilities.map((f, index) => <p key={index} className="py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">#{f}</p>)
                        }
                    </div>
                </div>
                <hr className="mb-6" />
                <div className="max-w-[358px] mb-8 flex justify-between">
                    <div className="text-[#5a5a5a]">
                        <p>Area:</p>
                        <p>BedRoom:</p>
                        <p>BathRoom:</p>
                        <p>Price:</p>
                    </div>
                    <div className=''>
                        <p className='flex gap-x-2 items-center'><FiBox/><span>{area}</span></p>
                        <p className='flex gap-x-2 items-center'><IoBedOutline/><span>{bedrooms} Bed</span></p>
                        <p className='flex gap-x-2 items-center'><PiBathtubBold/><span>{bathrooms} Bath</span></p>
                        <p className='flex gap-x-2 items-center'><FaSackDollar/><span>{price} $</span></p>

                </div>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;
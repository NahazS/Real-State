import React from 'react';
import { FiSearch } from "react-icons/fi";
const Form = () => {
    return (
        <div>
            <form className="mb-[100px] md:mb-0 p-4 h-auto md:h-[135px] items-center grid grid-cols-1 sm:grid-cols-2 md:inline-flex gap-x-5  rounded-lg bg-black bg-opacity-55 md:bg-opacity-40 " action="">
                <div className="flex flex-col gap-y-2 text-left text-[#e5e5e5]">
                    <label htmlFor="Location">Location</label>
                    <select className="select select-bordered w-full max-w-xs bg-transparent">
                      <option disabled selected>All</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Gazipur</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2 text-left text-[#e5e5e5]">
                    <label htmlFor="Location">Property Type</label>
                    <select className="select select-bordered w-full h-[45px] bg-transparent">
                      <option disabled selected>Apartment</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Studio</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2 text-left text-[#e5e5e5]">
                    <label htmlFor="Location">Bed Room</label>
                    <select className="select select-bordered w-full h-[45px] bg-transparent">
                      <option disabled selected>01</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2 text-left text-[#e5e5e5]">
                    <label htmlFor="Location">Bath Room</label>
                    <select className="select select-bordered w-full h-[45px] bg-transparent">
                      <option disabled selected>01</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2 w-full sm:col-span-2 md:w-fit text-left text-white">
                    <label htmlFor="">Find Now</label>
                    <button className="btn btn-neutral"><FiSearch /></button>
                </div>
            </form>
        </div>
    );
};

export default Form;
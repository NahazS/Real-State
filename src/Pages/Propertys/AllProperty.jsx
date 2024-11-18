
import { useLoaderData } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Form from '../Home/Form';

const AllProperty = () => {
    const {currentSlide} = useContext(AuthContext)
    const imageNum = currentSlide + 1
    const [property, setProperty] = useState([])
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    },[])
    return (
        <div>
            <div style={{backgroundImage: `url(/images/${imageNum}.jpg)`,}} className={`h-[450px] bg-cover bg-no-repeat text-center relative ${imageNum === 2 ? 'text-black text-opacity-70' : 'text-[#e5e5e5]'}`}>
                <div className='absolute w-full top-1/2 md:top-[395px] left-1/2 transform translate-x-[-50%] translate-y-[-50%] lg:translate-y-0 mt-[100px] md:mt-0 px-4'>
                    <Form></Form>
                </div>
            </div>
            <div>
                <h4 className='text-center font-bold my-[100px]'>{property.length} Properties found</h4>
                <div className="max-w-[1170px] mb-[50px] px-3 sm:px-0 place-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
                    {
                        property.map(property => <PropertyCard key={property.id} property={property}></PropertyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProperty;
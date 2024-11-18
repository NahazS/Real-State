import React from 'react';
import Form from './Form';
const Slide = ({count}) => {
    return (
        <div style={{backgroundImage: `url(/images/${count}.jpg)`,}} className={` min-h-[900px] md:h-[700px] bg-cover bg-no-repeat text-center ${count === 2 ? 'text-black text-opacity-70' : 'text-[#e5e5e5]'}`}>
            <div className="pt-[200px]">
                <h1 className="text-7xl mb-4 font-bold">Find your best Property</h1>
                <h5 className="font-bold mb-6">Esteem spirit temper too say adieus who direct esteem.</h5>
            </div>
            <Form></Form>
        </div>
    );
};

export default Slide;
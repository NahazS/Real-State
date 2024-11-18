import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading,currentSlide} = useContext(AuthContext)
    const imageNum = currentSlide + 1
    if(loading){
        return <div style={{backgroundImage: `url(/images/${imageNum}.jpg)`,}} className={`h-screen bg-cover bg-no-repeat flex items-center justify-center relative ${imageNum === 2 ? 'text-black text-opacity-70' : 'text-[#e5e5e5]'}`}><img className='w-[200px]' src="/loading.gif" alt="" /></div>
    }
    else if(user){
        return children
    } else{ 
    return <Navigate to={'/sign_in'}></Navigate>
    }
};

export default PrivateRoute;
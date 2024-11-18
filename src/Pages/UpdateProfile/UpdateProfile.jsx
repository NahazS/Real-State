import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.config';
import { updateEmail, updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const {currentSlide, user, loading,updateUserProfile} = useContext(AuthContext)
    const imageNum = currentSlide + 1

    const handleSubmit = e => {
        e.preventDefault()
        const fastName = e.target.fName.value
        const lastName = e.target.lName.value
        const name = fastName + lastName
        const photoURL = e.target.photo.value
        updateUserProfile(name,photoURL)
    }

    return ( loading ? <h1>loading</h1> :
        <div style={{backgroundImage: `url(/images/${imageNum}.jpg)`,}} className={`h-screen bg-cover bg-no-repeat text-center relative ${imageNum === 2 ? 'text-black text-opacity-70' : 'text-[#e5e5e5]'}`}>
            <div className="w-full flex max-w-md bg-[#2b2737] bg-opacity-80 rounded-lg p-8 shadow-lg absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-6"> Update Profile Details </h1>
                    <form onSubmit={handleSubmit}  className="space-y-4">
                    <input name='fName' type="text" defaultValue={user.displayName} className="w-full inputStyle"
                    />
                    <input name="lName" type="text" defaultValue={user.email} className="w-full inputStyle "
                    />
                    <input name="photo" type="text" defaultValue={user.photoURL} className="w-full inputStyle "
                    />
                    <input type="submit" className="w-full p-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700" value="Save change" 
                    />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  const {currentSlide, user, signOutUser} = useContext(AuthContext)
  const imageIndex = currentSlide + 1; // Ensures it cycles between 0, 1, 2
  const imagePath = `/images/${imageIndex}.jpg`;
  const [menu, setMenu] = useState(true)

  const handleSignOut = () => {
    if(user){
      signOutUser()
        .then(() => console.log("successfully log out"))
        .catch((error) => console.log(error.message))
    }
}
  return (
    <div style={{backgroundImage: `url(${imagePath})`,}} className=" bg-top bg-no-repeat sm:bg-cover text-black text-opacity-55">
        <div className="flex justify-between items-center py-6 px-5 xl:px-0 xl:max-w-[1170px] mx-auto">
            <Link className="drop-shadow-2xl font-bold"><h3>Real State</h3></Link>
            <ul className="text-lg gap-x-6 hidden md:flex">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/all_property'}>Property</NavLink></li>
                <li><NavLink to={'/update_profile'}>Update Profile</NavLink></li>
                <li><NavLink to={'/wish_list'}>Wish List</NavLink></li>
            </ul>
            <div className="flex items-center gap-x-3">
              <div className={`w-[46px] ${user ? 'tooltip' : ''}`} data-tip={user ? user.displayName : ''}>
                  <img className="rounded-3xl w-full h-[46px] bg-[#90a7b3]" src={user ? user.photoURL : 'images/user.png'} 
                  />
                </div>
                <Link to={!user && '/sign_in'} onClick={handleSignOut} className="hidden sm:flex px-4 btn rounded-3xl border-none bg-[#90a7b3] hover:shadow-xl active:shadow-inner">{user ? 'Sign Out' : 'Sign in'}</Link>
                <div>
                  <button onClick={()=> setMenu(!menu)} className="flex md:hidden px-4 btn rounded-3xl border-none bg-[#90a7b3] hover:shadow-xl active:shadow-inner"><HiOutlineMenu /></button>
                  <div style={{ zIndex: 50 }} className={`px-6 bg-[#90a7b3] text-center absolute top-20 right-6 rounded-2xl ${menu ? 'hidden' : 'inline-flex'} `}>
                    <ul className="text-lg gap-x-6">
                      <li onClick={() => setMenu(true)}><Link to={'/'}>Home</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/all_property'}>Property</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/update_profile'}>Update Profile</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/wish_list'}>Wish List</Link></li>
                      <li className="sm:hidden"><Link to={!user && '/sign_in'} onClick={handleSignOut}>{user ? 'Sign Out' : 'Sign in'}</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
};

export default Navbar;

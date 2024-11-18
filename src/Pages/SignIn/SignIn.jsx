import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
    const {currentSlide} = useContext(AuthContext)
    const imageNum = currentSlide + 1

    {/* <-------------------------------------------------------------- Sign In --------------------------------------------------------------> */}
    const {signInUser, signOutUser, signInGoogle, signInGithub, user, setUser, loading} = useContext(AuthContext)
    
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(user => {
                console.log(user.user)
                e.target.reset()
            })
            .catch(error => console.log(error.message))
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                console.log("Google Sign-In Successful:", result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.error("Error during Google Sign-In:", error.message);
                console.error("Error details:", error); // Debug the full error object
                alert("Google Sign-In Failed: " + error.message);
            });
    }
    
    const handleGithubSignIn = () => {
        signInGithub()
            .then(user => setUser(user.user))
            .catch(error => console.error(error.message));
    };
    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log("successfully log out"))
            .catch((error) => console.log(error.message))
    }
    
    return (
        loading ? <h1>loading</h1> :
      <div>
        <div>
          <div style={{backgroundImage: `url(/images/${imageNum}.jpg)`,}} className={`h-screen bg-cover bg-no-repeat text-center relative ${imageNum === 2 ? 'text-black text-opacity-70' : 'text-[#e5e5e5]'}`}>
            <div className="w-full flex max-w-md bg-[#2b2737] bg-opacity-80 rounded-lg p-8 shadow-lg absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-6"> Log in</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="email" type="email" placeholder="Email" className="w-full inputStyle "
                    />
                    <input name="password" type="password" placeholder="Enter your password" className="w-full inputStyle"
                    />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="h-4 w-4 text-purple-600 bg-[#3a364a] rounded"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-400">
                          I agree to the{" "}
                          <a href="#" className="text-purple-500">Terms & Conditions</a>
                        </label>
                    </div>
                    <input type="submit" className="w-full p-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700" value="Log In" 
                    /> 
                    </form>
                    <label htmlFor="terms" className="text-sm text-gray-400">
                        Create an account{" "}
                          <Link to={'/sign_up'} className="text-purple-500">Sign Up</Link>
                    </label>
        
                    {/* Divider */}
                    <div className="my-6 flex items-center">
                    <span className="flex-grow border-t border-gray-600"></span>
                    <span className="mx-4 text-gray-400">Or register with</span>
                    <span className="flex-grow border-t border-gray-600"></span>
                    </div>
        
                    {/* Social Media Sign Up */}
                    <div className="flex space-x-4">
                    <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-x-3 flex-grow p-3 rounded-lg bg-[#3a364a] text-white font-semibold hover:bg-gray-600 place-items-center content-center"><FaGoogle   /> Google</button>
                    <button onClick={handleGithubSignIn} className="flex items-center justify-center gap-x-3 flex-grow p-3 rounded-lg bg-[#3a364a] text-white font-semibold hover:bg-gray-600 place-items-center content-center"><FaGithub /> GitHub</button>
                    </div>
                </div>
                
            </div>
            <button onClick={handleSignOut} className={`${user ? 'flex' : 'hidden'} btn bg-[#3a364a] text-red-600 text-xl absolute left-1/2 transform translate-x-[-50%] top-[80%]`}>Sign Out ?</button>
          </div>
        </div>
      </div>
    );
};

export default SignIn;

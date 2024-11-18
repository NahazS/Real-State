import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="text-black text-opacity-65 mt-10">
            <hr />
            <div className="flex justify-between items-start py-6 max-w-[1170px] mx-auto pt-[145px] pb-[129px]">
                <div>
                    <Link className="drop-shadow-2xl font-bold"><h3 className="mb-10">Real State</h3></Link>
                    <ul className="leading-[42px]">
                        <li>real@support.com</li>
                        <li>+880 1234567890</li>
                        <li>Dhaka, Bangladesh</li>
                    </ul>
                    <div>
                        <ul className="flex gap-x-2 mt-[20px]">
                            <div className=" border-[1px] rounded-full items-center"><li className="p-[10px]"><FaFacebook className="w-[15px]" /></li></div>
                            <div className=" border-[1px] rounded-full items-center"><li className="p-[10px]"><FaGithub className="w-[15px]" /></li></div>
                            <div className=" border-[1px] rounded-full items-center"><li className="p-[10px]"><FaGoogle className="w-[15px]" /></li></div> 
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="mb-10">Services</h4>
                        <ul className="leading-[42px]">
                            <li><a href="#">Marketing &amp; SEO</a></li>
                            <li><a href="#"> Startup</a></li>
                            <li><a href="#">Finance solution</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Travel</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="mb-10">Useful Links</h4>
                        <ul className="leading-[42px]">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#"> Contact</a></li>
                            <li><a href="#">Appointment</a></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-[350px]">
                    <h4 className="mb-10">Subscribe</h4>
                    <form className="border-[1px] border-black border-opacity-30 w-fit rounded-3xl pl-[20px] pr-[2px] py-[1px] mb-[42px]">
                        <input type="text" placeholder="Enter your mail" 
                        />
                        <button className='h-[40px] px-[20px] hover:bg-[#f2b06a] hover:bg-opacity-60 bg-[#f2b06a] rounded-3xl border-none'>Subscribe</button>
                    </form>
                    <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                </div>
                
            </div>
            <hr />
            <p className="py-[30px] text-center">Copyright © 2024 All rights reserved</p>
        </div>
    );
};

export default Footer;
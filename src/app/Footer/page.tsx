import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer(){
    return(
        <div>
        {/* parent div  */}
        <div className="flex items-center justify-between  px-10 py-10 bg-pink-400 text-white">
            {/* First Section  */}
            <div className="flex flex-col items-center mx-auto md:mx-0"> <p className="text-3xl text-black">About us</p>
                <p>Welcome to MyShop,</p>
                <p>your one-stop shop for all your needs!</p>
            </div>

            {/* Second Section  */}
            <div className="hidden lg:block">
                <ul className="flex flex-col items-center pr-28">
                    <li className="text-3xl text-black">Privacy Policy</li>
                    <li>Terms of Services</li>
                    <li>Support</li>
                </ul>
            </div>

            {/* Third Section  */}
            <div className="hidden md:block pr-12">
                <p className="text-3xl text-black">Follow Us</p>
                {/* Facebook Icon */}
                <div className="flex gap-2 items-center">
                <FaFacebook  className="text-pink-700"/>
                <p>Facebook.com</p>
                </div>

                {/* instagram Icon  */}
                <div className="flex gap-2 items-center">
                <FaInstagram className="text-pink-700" />
                <p>Facebook.com</p>
                </div>
            </div>
        </div>
        </div>
    )
}
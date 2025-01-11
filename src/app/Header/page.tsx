import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export default function Header(){
    return(
        <div className="flex justify-between items-center bg-pink-400 py-5 px-10 overflow-hidden">
            {/* company name  */}
            <div className="text-white text-2xl md:text-3xl font-bold">
                    ShopAura
            </div>

            {/* Search bar  */}
            <div className="hidden lg:block">
            <div className="border-2 rounded-lg w-72 h-10 px-1 flex items-center justify-around bg-white ">
                <input type="text" placeholder="Search Products" />
                <CiSearch  className="text-xl"/>
            </div></div>

            {/* Menu Icon  */}
            <CiMenuBurger  className="md:hidden text-2xl cursor-pointer"/>

            {/* Links  */}
            
            <div className="hidden md:block">
            
                <ul className="flex items-center gap-7 text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
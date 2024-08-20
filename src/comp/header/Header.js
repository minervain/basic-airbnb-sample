import React, { useState } from "react";
import { GrBasket } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import '../.././index.css';
import BotNav from "./botNav";
import logo from '../../assets/tripkolic_logo.png';
import { Link } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";
import { HiMenu } from "react-icons/hi"; // Hamburger menüsü için Tailwind CSS'ten

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white shadow-md p-4 font-semibold">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-3">
                {/* Logo ve Arama Çubuğu */}
                <div className="flex items-center w-full md:w-auto">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-24 h-auto" />
                    </Link>
                    <div className="relative ml-6 flex-grow">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 pr-10 border-b-2 border-[#1BBBB1] bg-transparent focus:outline-none focus:ring-0"
                        />
                        <IoSearchCircle size={32} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1BBBB1] text-2xl" />
                    </div>
                </div>

                {/* Hamburger Menüsü (Mobil için) */}
                <div className="md:hidden flex items-center space-x-4">
                    <HiMenu className="h-6 w-6 text-gray-700 cursor-pointer" onClick={toggleMenu} />
                </div>

                {/* Navigasyon Menüsü */}
                <nav className={`md:flex flex-1 items-center justify-center space-x-12 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <a href="/tours" className="relative group">
                        Tours
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1BBBB1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                    <a href="/tickets" className="relative group">
                        Tickets
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1BBBB1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                    <a href="/course" className="relative group">
                        Course
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1BBBB1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                    <a href="/course2" className="relative group">
                        Rentals
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1BBBB1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                </nav>

                {/* Sosyal Medya ve Diğer İkonlar */}
                <div className="flex items-center space-x-4">
                    <div className="hover:text-red-500">
                        <FcLike size={32} />
                    </div>
                    <div className="hover:text-blue-500">
                        <GrBasket size={28} />
                    </div>
                    <div className="hover:text-red-800">
                        <IoIosLogOut size={36} />
                    </div>
                </div>
            </div>
            <BotNav />
        </header>
    );
};

export default Header;

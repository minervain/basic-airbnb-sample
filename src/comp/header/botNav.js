import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { RiListSettingsFill } from "react-icons/ri";
import Filter from "./Filter";
import Modal from "./Modal";

const FilterNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <nav className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-5">
            <div className="flex items-center space-x-2">
                <LuMapPin size={32} className="renk" />
                <RiListSettingsFill
                    size={32}
                    className="cursor-pointer"
                    onClick={openModal}
                />
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <Filter onClose={closeModal} />
                </Modal>
            </div>

            <div className="flex flex-wrap space-x-4 md:space-x-6">
                {["category", "price", "groupSize", "startTime", "duration", "vehicle", "features", "languages"].map((dropdown) => (
                    <div className="relative" key={dropdown}>
                        <div
                            onClick={() => toggleDropdown(dropdown)}
                            className="flex items-center text-gray-700 hover:text-[#1BBBB1] cursor-pointer"
                        >
                            <span className="font-medium">
                                {dropdown.charAt(0).toUpperCase() + dropdown.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <FaChevronDown
                                className={`ml-2 renk transition-transform ${openDropdown === dropdown ? "rotate-180" : ""}`}
                            />
                        </div>
                        {openDropdown === dropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 overflow-y-auto max-h-40 z-50">
                                <ul className="space-y-1">
                                    {dropdown === "category" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Adventure</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Cultural</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Sightseeing</li>
                                        </>
                                    )}
                                    {dropdown === "price" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">$0 - $100</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">$100 - $500</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">$500 - $1000</li>
                                        </>
                                    )}
                                    {dropdown === "groupSize" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">1-5 people</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">6-10 people</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">10+ people</li>
                                        </>
                                    )}
                                    {dropdown === "startTime" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Morning</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Afternoon</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Evening</li>
                                        </>
                                    )}
                                    {dropdown === "duration" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">1-2 hours</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">3-5 hours</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Full Day</li>
                                        </>
                                    )}
                                    {dropdown === "vehicle" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Car</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Bus</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Bike</li>
                                        </>
                                    )}
                                    {dropdown === "features" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Wi-Fi</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Meals Included</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Guide</li>
                                        </>
                                    )}
                                    {dropdown === "languages" && (
                                        <>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">English</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">Spanish</li>
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer rounded-md">French</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default FilterNav;

import React from "react";
import '../.././index.css';

const Filter = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none">
                    <option value="">Select Category</option>
                    <option value="adventure">Adventure</option>
                    <option value="sightseeing">Sightseeing</option>
                    <option value="cultural">Cultural</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Price</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    color="red"
                    className="w-full"
                />
                <div className="flex justify-between text-gray-600 text-sm">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Group Size</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none">
                    <option value="">Select Group Size</option>
                    <option value="small">1-5 people</option>
                    <option value="medium">6-10 people</option>
                    <option value="large">10+ people</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Start Time</label>
                <input type="time" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Duration (Hours)</label>
                <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Enter duration"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Vehicle</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none">
                    <option value="">Select Vehicle</option>
                    <option value="car">Car</option>
                    <option value="bus">Bus</option>
                    <option value="bike">Bike</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Features</label>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Wi-Fi</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Meals Included</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Guide</span>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Languages</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none">
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                </select>
            </div>

            <button className="renk text-white py-2 px-4 rounded-md w-full mt-4 hover:bg-blue-600 to-white">
                Apply Filters
            </button>
        </div>
    );
};

export default Filter;

import React from 'react'
import image3 from '../assets/dt.jpg';
import '../index.css';

const DetailCard = () => {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white font2 renk">
            <div className="relative h-auto mb-6">
                <img src={image3} alt="Detail" className="object-cover w-full h-full rounded-t-lg" />
            </div>

            <div className="flex flex-col">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2 renk1">Description</h2>
                    <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2  ">Price</h2>
                    <p className="text-xl font-semibold text-green-600">$299</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2 ">Location</h2>
                    <p className="text-gray-700">Malatya</p>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;

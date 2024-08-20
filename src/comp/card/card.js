import React from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../.././index.css';

const SliderCard = ({ images, description, location, price }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden relative font1">
            <Link to="/details" className="w-full h-auto">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-1/2">
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </Link>

            <div className="p-4">
                <p className="text-gray-700 mb-2">{description}</p>

                <div className="flex items-center mb-2 text-gray-600">
                    <FaMapMarkerAlt className="mr-1 renk" />
                    <span>{location}</span>
                </div>

                <div className="text-gray-800 font-bold">
                    <FaDollarSign className="inline mr-1 renk" />
                    <span className='renk1'>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;

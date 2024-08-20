import React from 'react'
import SliderCard from '../comp/card/card';
import image1 from '../assets/resim1.jpg';
import image2 from '../assets/resim2.jpg';
import image3 from '../assets/resim3.jpg';
const mainp = () => {
    const images = [image1, image2, image3];

    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-auto  ">
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />
            <SliderCard
                images={images}
                description="A beautiful resort with stunning views and excellent amenities."
                location="Malatya, Turkey"
                price="$299"
            />

        </div>
    )
}

export default mainp
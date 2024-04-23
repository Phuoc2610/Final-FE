import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";

const ImageDetails = (props) => {
    const { details } = useSelector((state) => state.product);

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? details.productImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === details.productImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    function handleImageDetails(e) {
        e.preventDefault();
        props.toggle();
    }
    return (
        <div className=' h-[900px] w-[90%] m-auto py-16 px-4 z-10 top-1 left-[5%] fixed group ' onSubmit={handleImageDetails}>
            <div
                style={{ backgroundImage: `url(${details.productImages[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
            >
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <button
                className="absolute top-20 right-10"
                onClick={props.toggle}
            >
                <IoMdClose className="text-3xl bg-white text-gray-500 rounded-lg hover:text-black" />
            </button>
        </div>
    )
}

export default ImageDetails;
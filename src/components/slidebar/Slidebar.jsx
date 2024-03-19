import { MdOutlineShoppingCart } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import { IoArrowBack, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightlight } from "react-icons/md";
import { useState, useEffect } from "react";

const Slidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // DarkMode
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const btnDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    // BackToTop
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const btnToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed right-0 top-60 bg-gray-950 px-4 py-2 rounded">
            <div className="py-3 border-b-2 border-gray item-slideBar">
                <button onClick={btnToTop}>
                    <BiArrowToTop className="text-3xl ml-1" />
                </button>

            </div>
            <div className="text-3xl ml-1 item-slideBar">
                <button onClick={btnDarkMode}>
                    {darkMode ? <IoSunnyOutline /> : <MdOutlineNightlight />}
                </button>
            </div>
            <div className="item-slideBar" >
                <IoArrowBack className="text-3xl ml-1" />
                <h4 className="text-lg ">
                    Back
                </h4>
            </div>
            <div className="item-slideBar">
                <MdOutlineShoppingCart className="text-3xl ml-1" />
                <h4 className="text-lg ml-1">
                    Buy
                </h4>
            </div>
        </div>
    )
}

export default Slidebar;
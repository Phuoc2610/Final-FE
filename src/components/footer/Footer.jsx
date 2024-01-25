import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex justify-around w-10/12 ml-20 py-3">
            <div className="">
                <h3 className="underline">K Mart</h3>
                <p>We are dedicated to the safety of our guests
                    <br />
                    and employees and have updated our safety measures.</p>
                <div className="flex">
                <FaFacebook className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3"/>
                <FaInstagram className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3"/>
                <FaTwitter className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3"/>
                <FaYoutube className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3"/>
                </div>
            </div>
            <div>
                <h3 className="underline">Information</h3>
                <ul className="">
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">About Us</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Contact US</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">FAQ's</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Special Products</li>
                </ul>
            </div>
            <div>
                <h3 className="ml-6 underline">Category</h3>
                <ul>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Fruits & Vegetables</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Meats & Seafood</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Beverages</li>
                    <li className="my-2 hover:text-blue-700 hover:underline duration-500">Breakfast & Dairy</li>
                </ul>
            </div>
            <div>
                <h3 className="underline ml-10">Contact</h3>
                <div className="flex mt-2">
                    <IoLocationOutline className="text-4xl bg-gray-200 text-blue-900 px-1 rounded-full"/>
                    <span className="pl-2 mt-1">117 Nguyen Tri Phuong</span>
                </div>
                <div className="flex mt-3">
                    <MdOutlineEmail className="text-4xl bg-gray-200 text-blue-900 px-2 rounded-full"/>
                    <span className="pl-2 mt-1">phuoc0905886611@gmail.com</span>
                </div>
                <div className="flex mt-3">
                    <MdLocalPhone className="text-4xl bg-gray-200 text-blue-900 px-2 rounded-full"/>
                    <span className="pl-2 mt-1">0905886611</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
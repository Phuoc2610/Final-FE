import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {

    return (
        <div className="mt-3 duration-500">
            <div className="flex justify-around py-10 bg-[#233a95]">
                <div className="text-white">
                    <h2 className="text-5xl">Newsletter</h2>
                    <p className="text-[#ccc]">Excepteur sint occaecat cupidatat non proident, sunt.</p>
                </div>
                <div className="mt-3">
                    <input type="text" placeholder="Email" className=" py-2 pl-6 w-80 rounded-lg " />
                    <button className="py-[12px] px-[40px] rounded-lg bg-[#ed174a] hover:bg-[#0f183a]">
                    <FiSend className="text-[17px] text-white"/>
                    </button>
                </div>
            </div>

        <div className="container-fluid flex justify-around  py-3 dark:bg-[#0f183a] dark:text-white">
            <div className="">
                <h3 className="underline text-3xl py-4">K Mart</h3>
                <p>We are dedicated to the safety of our guests
                    <br />
                    and employees and have updated our safety measures.</p>
                <div className="flex mt-3">
                <FaFacebook className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3 dark:text-blue-800 dark:hover:text-white "/>
                <FaInstagram className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3 dark:text-blue-800 dark:hover:text-white"/>
                <FaTwitter className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3 dark:text-blue-800 dark:hover:text-white"/>
                <FaYoutube className="text-4xl bg-gray-200 text-black-900 hover:bg-blue-800 hover:text-white duration-300 px-2 rounded-full ml-3 dark:text-blue-800 dark:hover:text-white"/>
                </div>
            </div>
            <div>
                <h3 className="underline text-3xl py-4">Information</h3>
                <ul className="">
                    <li className="my-2 hover:text-blue-700 hover:underline ">About Us</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Contact US</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">FAQ's</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Special Products</li>
                </ul>
            </div>
            <div>
                <h3 className="ml-6 text-3xl underline py-4">Category</h3>
                <ul>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Fruits & Vegetables</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Meats & Seafood</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Beverages</li>
                    <li className="my-2 hover:text-blue-700 hover:underline ">Breakfast & Dairy</li>
                </ul>
            </div>
            <div>
                <h3 className="underline text-3xl ml-10 py-4">Contact</h3>
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
        </div>

    )
}

export default Footer;
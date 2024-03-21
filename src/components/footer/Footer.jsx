import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {

    return (
        <div className="duration-500">
            <div className="min-[1000px]:flex justify-around py-10 bg-[#233a95]">
                <div className="text-white max-[1000px]:text-center">
                    <h2 className="text-5xl">Newsletter</h2>
                    <p className="text-[#ccc]">Excepteur sint occaecat cupidatat non proident, sunt.</p>
                </div>
                <div className="mt-4 max-[1000px]:text-center">
                    <input type="text" placeholder="Email" className=" py-2 pl-6 max-[1000px]:w-[70%] min-[1000px]:w-80 rounded-lg " />
                    <button className="py-[12px] px-[40px] rounded-lg bg-[#ed174a] hover:bg-[#0f183a]">
                    <FiSend className="text-[17px] text-white"/>
                    </button>
                </div>
            </div>

        <div className="container-fluid py-3 dark:bg-[#0f183a] dark:text-white grid text-center justify-items-center gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
            <div id="contact">
                <h3 className="title-footer">K Mart</h3>
                <p>We are dedicated to the safety of our guests
                    <br />
                    and employees and have updated our safety measures.</p>
                <div className="flex mt-3 ml-[25%]">
                <FaFacebook className="icon-footer"/>
                <FaInstagram className="icon-footer"/>
                <FaTwitter className="icon-footer"/>
                <FaYoutube className="icon-footer"/>
                </div>
            </div>
            <div>
                <h3 className="title-footer">Information</h3>
                <ul className="">
                    <li className="item-footer ">About Us</li>
                    <li className="item-footer ">Contact US</li>
                    <li className="item-footer ">FAQ's</li>
                    <li className="item-footer ">Special Products</li>
                </ul>
            </div>
            <div>
                <h3 className="ml-6 title-footer">Category</h3>
                <ul>
                    <li className="item-footer ">Fruits & Vegetables</li>
                    <li className="item-footer ">Meats & Seafood</li>
                    <li className="item-footer ">Beverages</li>
                    <li className="item-footer ">Breakfast & Dairy</li>
                </ul>
            </div>
            <div>
                <h3 className="ml-10 title-footer">Contact</h3>
                <div className="flex mt-2">
                    <IoLocationOutline className="contact-footer"/>
                    <span className="text-footer">117 Nguyen Tri Phuong</span>
                </div>
                <div className="flex mt-3">
                    <MdOutlineEmail className="contact-footer"/>
                    <span className="text-footer">phuoc0905886611@gmail.com</span>
                </div>
                <div className="flex mt-3">
                    <MdLocalPhone className="contact-footer"/>
                    <span className="text-footer">0905886611</span>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Footer;
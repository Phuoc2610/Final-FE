import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';


const User = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <div className="avatar relative">
                <div className="w-8 h-8 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <button className="pl-2" onClick={() => {
                    setDropdown(!dropdown)
                }}>
                    {dropdown ?
                        <p>Hi Phuoc</p>
                        :
                        <>
                            <p>Hi Phuoc</p>
                            <ul className="absolute top-9 left-0  rounded-md bg-white text-slate-600 font-medium">
                                <li className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300">
                                        <CgProfile className="h-6 w-6 mr-2" />
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300 ">
                                    <MdLogout className="h-6 w-6 mr-2" />
                                    Logout</li>
                            </ul>
                        </>}
                </button>

            </div>
        </div>
    )
}

export default User;
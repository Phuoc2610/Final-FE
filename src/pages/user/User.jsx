import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { logOut } from "../../redux/auth/authSlice";
import { openMessage } from "../../redux/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const {user} = useSelector((state) =>state.auth)
    const [dropdown, setDropdown] = useState(true);
    const dispatch = useDispatch()
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
                        <p>{user.email}</p>
                        :
                        <>
                            <p>{user.email}</p>
                            <ul className="absolute top-9 left-0  rounded-md bg-white text-slate-600 font-medium">
                                <li className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300">
                                    <CgProfile className="h-6 w-6 mr-2" />
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300 ">
                                    <FaStore className="mr-2" />
                                    <Link to="/store">
                                        Store
                                    </Link>
                                </li>
                                <li className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300 ">
                                    <RiLockPasswordFill className="mr-2" />
                                    <Link to="/changePassword">
                                        Password
                                    </Link>
                                </li>
                                <li 
                                    className="py-2 px-6 flex items-center hover:bg-gray-700 hover:text-white duration-300 "
                                    onClick={()=>{
                                        dispatch(logOut());
                                        dispatch(openMessage({ message: "Logout success !", notificationType: 'success' }))
                                    }}
                                >
                                    <MdLogout className="h-6 w-6 mr-2" />
                                        Logout
                                </li>
                            </ul>
                        </>}
                </button>

            </div>
        </div>
    )
}

export default User;
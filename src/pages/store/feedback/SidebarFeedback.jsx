import { MdOutlineShoppingCart, MdDashboard, MdLogout  } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaStore } from "react-icons/fa";
import { BsFillArchiveFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SidebarFeedback = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <h3 className="flex text-3xl py-4 items-center justify-center">
                <MdOutlineShoppingCart className="mr-2" />
                K Mart</h3>
            <ul className="pl-6 max-md:grid max-md:justify-items-center">
                <li className="item-adminBar ">
                    <MdDashboard className="mr-2" />
                    <button onClick={() => { navigate('') }} className="text-lg">
                        Dashboard
                    </button>
                </li>
                <li className="item-adminBar ">
                    <BsFillArchiveFill className="mr-2" />
                    <button onClick={() => { navigate('category') }} className="text-lg">
                        Categories
                    </button>
                </li>
                <li className="item-adminBar ">
                    <PiUserListBold className="mr-2" />
                    <button onClick={() => { navigate('user') }} className="text-lg">
                        User
                    </button>
                </li>
                <li className="item-adminBar ">
                    <FaStore className="mr-2" />
                    <button onClick={() => { navigate('storeowner') }} className="text-lg">
                        Storeowner
                    </button>
                </li>
                <li className="item-adminBar ">
                    <MdLogout  className="mr-2" />
                    <button onClick={() => { navigate('') }} className="text-lg">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SidebarFeedback;
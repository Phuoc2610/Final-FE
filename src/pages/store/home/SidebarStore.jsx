import { MdOutlineShoppingCart, MdDashboard, MdLogout, MdFeedback   } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SidebarStore = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around">
            <h3 className="flex text-3xl py-4 items-center justify-center">
                <MdOutlineShoppingCart className="mr-2" />
                K Mart</h3>
            <ul className="pl-6 flex">
                <li className="item-adminBar px-2">
                    <MdDashboard className="mr-2" />
                    <button onClick={() => { navigate('') }} className="text-lg">
                        Dashboard
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <BsFillArchiveFill className="mr-2" />
                    <button onClick={() => { navigate('listproduct') }} className="text-lg">
                        Products
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <IoMdChatboxes className="mr-2" />
                    <button onClick={() => { navigate('message') }} className="text-lg">
                        Message
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <MdFeedback  className="mr-2" />
                    <button onClick={() => { navigate('feedback') }} className="text-lg">
                        Feedback
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <MdLogout  className="mr-2" />
                    <button onClick={() => { navigate('') }} className="text-lg">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SidebarStore;
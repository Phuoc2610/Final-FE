import { MdOutlineShoppingCart, MdDashboard, MdLogout, MdFeedback } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const SidebarStore = () => {
    const navigate = useNavigate();
    return (
        <div className="lg:flex justify-around">

            <Link to="/" className="item-adminBar text-3xl">
                <MdOutlineShoppingCart className="mr-2" />
                K Mart
            </Link>
            {/* <h3 className="flex text-3xl py-4 items-center justify-center">
                <MdOutlineShoppingCart className="mr-2" />
                K Mart</h3> */}
            <ul className="pl-6 flex max-lg:grid max-md:grid-cols-2 md:grid-cols-3 max-lg:w-[80%] max-lg:mx-auto">
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
                    <MdFeedback className="mr-2" />
                    <button onClick={() => { navigate('feedback') }} className="text-lg">
                        Feedback
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <CgProfile className="mr-2" />
                    <button onClick={() => { navigate('profile') }} className="text-lg">
                        Profile
                    </button>
                </li>
                <li className="item-adminBar px-2">
                    <MdLogout className="mr-2" />
                    <button onClick={() => { navigate('') }} className="text-lg">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SidebarStore;
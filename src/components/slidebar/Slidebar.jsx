import { MdOutlineShoppingCart } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
const Slidebar = () => {
    return (
        <div className="fixed right-0 top-60 bg-gray-950 px-4 rounded">
            <div className="py-3 border-b-2 border-gray text-gray-500 hover:text-white duration-500">
                <BiArrowToTop className="text-3xl ml-1"/>

            </div>
            <div className="pt-2 text-gray-500 hover:text-white duration-500" >
                <IoArrowBack   className="text-3xl ml-1"/>
                <h4 className="text-lg ">
                    Back
                </h4>
            </div>
            <div className="pt-2 text-gray-500 hover:text-white duration-500">
                <MdOutlineShoppingCart className="text-3xl ml-1"/>
                <h4 className="text-lg ml-1">
                    Buy
                </h4>
            </div>
        </div>
    )
}

export default Slidebar;
import Navbar from "../../components/navbar/Navbar";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Stepper from "./Stepper";

const ShoppingCart = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[80%] mx-auto mt-[3%]">
                <Stepper />
                <h1 className="text-4xl font-semibold mt-6">Shopping cart items</h1>
                <table className="w-[60%] text-center mt-16">
                    <thead className="text-xl">
                        <tr>
                            <th></th>
                            <th>ProductName</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Quality</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2">
                            <th>1</th>
                            <td >Nho đen mỹ không hạt</td>
                            <td className="w-[20%] ">
                                <img className="w-full" src="https://media.loveitopcdn.com/1254/thumb/nho-den-khong-hat-my-nhobonmuacom-2.jpg" alt="" />
                            </td>
                            <td>Vegetables</td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <p className="px-2 mx-2 border-[1px] rounded-sm border-black ">1</p>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                            </td>
                            <td>100$</td>
                        </tr>
                        <tr className="">
                            <th>2</th>
                            <td >Nho đen mỹ không hạt</td>
                            <td className="w-[20%] ">
                                <img className="w-full" src="https://media.loveitopcdn.com/1254/thumb/nho-den-khong-hat-my-nhobonmuacom-2.jpg" alt="" />
                            </td>
                            <td>Vegetables</td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <p className="px-2 mx-2 border-[1px] rounded-sm border-black ">1</p>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                            </td>
                            <td>100$</td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-[30%] fixed right-[5%] shadow-xl rounded-lg top-[30%] bg-gray-200">
                    <h2 className="text-2xl py-4 text-center font-semibold border-b-2 border-black">Summary</h2>
                    <div className="flex justify-between py-4 px-4 text-lg">
                        <h4 className="">Total products:</h4>
                        <p className="font-medium">200$</p>
                    </div>
                    <div className="flex justify-between py-4 px-4 text-lg">
                        <h4 className="">Shipping costs:</h4>
                        <p className="font-medium">Free</p>
                    </div>
                    <div className="flex justify-between py-4 px-4 text-lg font-bold border-t-2 border-black">
                        <h4 className="">Total:</h4>
                        <p>200$</p>
                    </div>
                    <div className="grid justify-items-center my-4">
                        <button className="btn btn-success w-[30%]">
                            CheckOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
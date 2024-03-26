import { FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";



const Details = (props) => {
    function handleDetail(e) {
        e.preventDefault();
        // Add your login logic here (e.g., API calls, validation)
        props.toggle(); // Close the popup form
    }

    return (
        <div className="w-full h-screen fixed top-[10%] left-[25%] " onSubmit={handleDetail}>
            <div className="w-[50%] h-[40%] bg-[#f5f0f0] shadow-2xl flex top-model">
                <div className='w-[50%] bg-blue-700 flex items-center justify-center py-4'>
                    <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />
                </div>
                <div className="w-[50%] py-4 px-4 relative">
                    <h1 className="py-2 text-center text-red-600 font-semibold text-2xl">Himalayan Cashews</h1>
                    <h3 className="text-xl font-semibold">Category</h3>
                    <p className="py-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="pb-2">
                        <span className="text-[18px] text-slate-500 line-through px-2">200$</span>
                        <span className="text-2xl font-semibold px-2 ">100$</span>
                    </div>
                    <div className="flex">
                        <div className="flex items-center">
                            <button>
                                <FaMinus />
                            </button>
                            <p className="px-2 mx-2 border-[1px] rounded-sm border-black ">1</p>
                            <button>
                                <FaPlus />
                            </button>
                        </div>
                        <button className="w-[35%] btn ml-6">Add to Card</button>
                    </div>
                    <button
                        className="absolute top-3 right-3"
                        onClick={props.toggle}
                    >
                        <IoMdClose className="text-3xl bg-gray-400 text-white rounded-lg hover:text-black" />
                    </button>
                </div>
            </div>
            <div className="w-[50%] h-[45%] overflow-y overflow-y-auto bg-[#f5f0f0] bottom-model">
                <h3 className="font-bold text-center text-xl pt-4 py-2">Hỏi và đáp</h3>
                <div className="flex question">
                    <div class="ml-4 w-[80%] text-black">
                        <input type="text" placeholder="Hãy đặt câu hỏi thắc mắc cho chúng tôi" className="input border-1 h-16 border-black" />
                    </div>
                    <div className="flex items-center bg-red-600 hover:bg-red-700 text-white h-10 px-2 ml-4 rounded-md">
                        <FiSend className="text-[17px] mr-2 " />
                        <button className="text-lg font-semibold ">
                            Send
                        </button>
                    </div>
                </div>
                <div className="py-6 px-4 answer">
                    <div className="py-4">
                        <div className="avatar flex justify-start">
                            <div className="w-8 h-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <span className="ml-4 text-lg font-semibold">Nguyen Van Phuoc</span>
                        </div>
                        <p className="mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eligendi?</p>
                    </div>
                    <div className="py-4">
                        <div className="avatar flex justify-end">
                            <span className="mr-4 text-lg font-semibold">Store</span>
                            <div className="w-8 h-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <p className="mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eligendi?</p>
                    </div>
                    <div className="py-4">
                        <div className="avatar flex justify-start">
                            <div className="w-8 h-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <span className="ml-4 text-lg font-semibold">Nguyen Van Phuoc</span>
                        </div>
                        <p className="mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eligendi?</p>
                    </div>
                    <div className="py-4">
                        <div className="avatar flex justify-end">
                            <span className="mr-4 text-lg font-semibold">Store</span>
                            <div className="w-8 h-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <p className="mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eligendi?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
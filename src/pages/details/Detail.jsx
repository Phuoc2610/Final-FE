import { FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Details = (props) => {
    function handleDetail(e) {
        e.preventDefault();
        // Add your login logic here (e.g., API calls, validation)
        props.toggle(); // Close the popup form
    }

    return (
            <div className="w-full fixed top-[30%] left-[25%] rounded-lg" onSubmit={handleDetail}>
                <div className="w-[50%] bg-white rounded-lg shadow-2xl flex">
                    <div className='w-[50%] bg-blue-700 flex items-center justify-center py-4'>
                        <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />
                    </div>
                    <div className="w-[50%] py-6 px-4 relative">
                        <h1 className="py-4 text-center text-red-600 font-semibold text-2xl">Himalayan Cashews</h1>
                        <p className="py-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="w-[25%] grid grid-cols-5 gap-1 py-4 ">
                            <FaRegStar className="text-blue-500" />
                            <FaRegStar className="text-blue-500" />
                            <FaRegStar className="text-blue-500" />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="pb-2">
                            <span className="text-[18px] text-slate-500 line-through px-2">200$</span>
                            <span className="text-2xl font-semibold px-2 ">100$</span>
                        </div>
                        <button className="w-[35%] btn">Add to Card</button>
                    <button
                        className="absolute top-3 right-3"
                        onClick={props.toggle}
                    >
                        <IoMdClose className="text-3xl bg-gray-400 text-white rounded-lg hover:text-black" />
                    </button>
                    </div>
                </div>
            </div>
    )
}

export default Details;
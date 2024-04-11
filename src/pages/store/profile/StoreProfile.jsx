import React, { useState } from "react";

const StoreProfile = () => {
    return (
        <div className="h-[93vh] bg-white text-black">
            <div className="w-[80%] md:flex justify-between mx-auto pt-10">
                <div className="w-full md:w-[50%] shadow-2xl  rounded-lg px-4 py-4 border-profile">
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Name:</h3>
                        <input type="text" className="input w-[90%] dark:text-black" placeholder="Store" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Email:</h3>
                        <input type="text" className="input w-[90%] dark:text-black" placeholder="phuoc@gmail.com" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Phone:</h3>
                        <input type="text" className="input w-[90%] dark:text-black" placeholder="0905886611" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Address:</h3>
                        <input type="text" className="input w-[90%] dark:text-black" placeholder="117 Nguyen Tri Phuoc" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Description:</h3>
                        <input type="text" className="input w-[90%] dark:text-black" placeholder="Description" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Password:</h3>
                        <input type="password" className="input w-[90%] dark:text-black" placeholder="********" />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Re-password:</h3>
                        <input type="password" className="input w-[90%] dark:text-black" placeholder="********" />
                    </div>
                    <div className="flex justify-center">

                        <button className="btn-product mt-8">Update</button>
                    </div>
                </div>
                <div className="w-full md:w-[40%] pt-[4%] ">
                    <img class="w-[80%] rounded-full shadow-2xl shadow-zinc-600 dark:shadow-[#00000094]  "
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <input className="block w-[80%] shadow-2xl shadow-zinc-600 dark:shadow-[#00000094] text-base mt-14 text-gray-900 border border-gray-500 rounded-lg 
                    cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                </div>
            </div>
        </div>
    )
}

export default StoreProfile;
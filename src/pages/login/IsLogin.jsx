import { useState, useEffect } from "react";


const IsLogin = () => {
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
                        <li className="py-2 px-6 hover:bg-gray-700 hover:text-white duration-300">Profile</li>
                        <li className="py-2 px-6 hover:bg-gray-700 hover:text-white duration-300">Logout</li>
                    </ul>
                    </>}
                </button>

            </div>
        </div>
    )
}

export default IsLogin;
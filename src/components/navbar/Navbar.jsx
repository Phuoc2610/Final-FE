import { IoMdMenu, IoMdClose  } from "react-icons/io";
import { useState, useEffect } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
          <nav className="sticky top-0 z-10">
            <div className="md:flex justify-around bg-[#233a95] py-2">
                <div className="flex justify-between px-4 items-center ">
                    <h2 className="text-white mt-2 text-2xl font-bold">K Mart</h2>
                <div className="text-white text-3xl">
                <button className="md:hidden block" onClick={()=>{
                    setOpen(!open)
                }}>
                   {open ? <IoMdMenu /> : <IoMdClose />  } 
                </button>
                </div>
                </div>
                <div className={`${open ? 'hidden' : 'block'}`}>
                    <ul className="max-md:grid max-md:justify-items-center max-md:gap-2 max-md:border-t-2 flex pb-2">
                        <li className="item-nav">Home</li>
                        <li className="item-nav">
                            <a href="#product">Product</a>
                        </li>
                        <li className="item-nav">
                            <a href="#contact">Contact</a>
                        </li>
                        <li className="item-nav">Login</li>
                        <li className="item-nav">Register</li>
                    </ul>
                </div>
            </div>
          </nav>
        </>
    )
}

export default Navbar;
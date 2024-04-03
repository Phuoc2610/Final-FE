import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Login from "../../pages/login/Login";
import IsLogin from "../../pages/login/IsLogin";
import Register from "../../pages/register/Register";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    function popLogin() {
        setLogin(!login);
    }
    function popRegister() {
        setRegister(!register);
    }
    return (
        <>
            <nav className="sticky top-0 z-10">
                <div className="md:flex justify-around bg-[#233a95] py-2">
                    <div className="flex justify-between px-4 items-center ">
                        <h2 className="text-white text-2xl font-bold">K Mart</h2>
                        <div className="text-white text-3xl">
                            <button className="md:hidden block" onClick={() => {
                                setOpen(!open)
                            }}>
                                {open ? <IoMdMenu /> : <IoMdClose />}
                            </button>
                        </div>
                    </div>
                    <div className={`${open ? 'hidden' : 'block'}`}>
                        <ul className="max-md:grid max-md:justify-items-center max-md:gap-2 max-md:border-t-2 flex">
                            <li className="item-nav">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="item-nav">
                                <a href="#product">Product</a>
                            </li>
                            <li className="item-nav">
                                <a href="#contact">Contact</a>
                            </li>
                            {isLogin ?
                                <>
                                    <li className="item-nav">
                                    <IsLogin/>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="item-nav">
                                        <button onClick={popLogin}>Login</button>
                                        {login ? <Login toggle={popLogin} /> : null}
                                    </li>
                                    <li className="item-nav">
                                        <button onClick={popRegister}>Register</button>
                                        {register ? <Register toggle={popRegister} /> : null}
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
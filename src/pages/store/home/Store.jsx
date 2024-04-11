import { Outlet } from 'react-router-dom';
import SidebarStore from "./SidebarStore";

const Store = () => {

    return (
        <div className="h-screen">
            <div className="bg-gray-800 text-slate-400 w-full lg:h-[7%] ">
            <SidebarStore/>
            </div>
            <div className="bg-gray-950 text-white w-full ">
                <Outlet />
            </div>
        </div>
    )
}

export default Store;
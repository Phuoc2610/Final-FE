import SidebarAdmin from "./SidebarAdmin";
import { Outlet } from 'react-router-dom';

const Admin = () => {

    return (
        <div className="md:flex lg:h-screen ">
            <div className="bg-gray-800 text-slate-400 w-full md:w-[30%] xl:w-[15%]">
            <SidebarAdmin/>
            </div>
            <div className="bg-gray-950 text-white w-full px-6 md:w-[70%] xl:w-[85%]">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin;
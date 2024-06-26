import { MdOutlineShoppingCart, MdDashboard } from "react-icons/md";
import { BsFillArchiveFill } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';



const Admin = () => {
    const data1 = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];
    const data2 = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];


    return (

        <div className="md:flex lg:h-screen ">
            <div className="bg-gray-800 text-slate-400 w-full md:w-[30%] xl:w-[15%]">
                <h3 className="flex text-3xl py-4 items-center justify-center">
                    <MdOutlineShoppingCart className="mr-2" />
                    K Mart</h3>
                <ul className="pl-6 max-md:grid max-md:justify-items-center">
                    <li className="item-adminBar ">
                        <MdDashboard className="mr-2" />
                        Dashborad</li>
                    <li className="item-adminBar ">
                        <BsFillArchiveFill className="mr-2" />
                        Product</li>

                    <li className="item-adminBar ">
                        <MdDashboard className="mr-2" />
                        Categories</li>
                    <li className="item-adminBar ">
                        <BsFillArchiveFill className="mr-2" />
                        Customer</li>

                    <li className="item-adminBar ">
                        <MdDashboard className="mr-2" />
                        Inventory</li>
                    <li className="item-adminBar ">
                        <BsFillArchiveFill className="mr-2" />
                        Reports</li>
                </ul>
            </div>
            <div className="bg-gray-950 text-white w-full px-6 md:w-[70%] xl:w-[85%]">
                <h4 className="text-3xl mb-6 text-center pt-[30px]">DASHBOARD</h4>
                <div className="grid justify-items-center gap-y-5 lg:grid-cols-2 lg:gap-x-2 xl:grid-cols-4 xl:gap-x-10 ">
                    <div className="bg-blue-700 item-admin">
                        <h5 className="title-admin">PRODUCTS
                            <BsFillArchiveFill />

                        </h5>
                        <p className="text-admin">249</p>
                    </div>
                    <div className="bg-yellow-700 item-admin">
                        <h5 className="title-admin">CATEGORIES
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-admin">255</p>
                    </div>
                    <div className="bg-green-700 item-admin">
                        <h5 className="title-admin">CUSTOMERTS
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-admin">1500</p>
                    </div>
                    <div className="bg-red-700 item-admin">
                        <h5 className="title-admin">STOREOWNER
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-admin">500</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-28 box-border">
                    <div className="">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data2}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="">
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={data1}>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Admin;
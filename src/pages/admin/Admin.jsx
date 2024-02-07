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
        <div className="flex h-screen">
            <div className="bg-gray-800 text-slate-400 w-1/5">
                <h3 className="flex text-3xl py-4 items-center justify-center">
                    <MdOutlineShoppingCart className="mr-2" />
                    K Mart</h3>
                <ul className="pl-6">
                    <li className="flex text-2xl py-4 items-center ">
                        <MdDashboard className="mr-2" />
                        Dashborad</li>
                    <li className="flex text-2xl py-4 items-center ">
                        <BsFillArchiveFill className="mr-2" />
                        Product</li>

                    <li className="flex text-2xl py-4 items-center ">
                        <MdDashboard className="mr-2" />
                        Dashborad</li>
                    <li className="flex text-2xl py-4 items-center ">
                        <BsFillArchiveFill className="mr-2" />
                        Product</li>

                    <li className="flex text-2xl py-4 items-center ">
                        <MdDashboard className="mr-2" />
                        Dashborad</li>
                    <li className="flex text-2xl py-4 items-center ">
                        <BsFillArchiveFill className="mr-2" />
                        Product</li>
                </ul>
            </div>
            <div className="bg-gray-950 text-white w-full px-6">
                <h4 className="mt-12 text-3xl mb-6">DASHBOARD</h4>
                <div className=" grid grid-cols-4 gap-x-10 ">
                    <div className="bg-blue-700 rounded px-6 py-6">
                        <h5 className="flex items-center justify-between text-2xl">PRODUCTS
                            <BsFillArchiveFill />

                        </h5>
                        <p className="text-3xl pt-6 font-bold">249</p>
                    </div>
                    <div className="bg-yellow-700 rounded px-6 py-6 ">
                        <h5 className="flex items-center justify-between text-2xl">CATEGORIES
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-3xl pt-6 font-bold">255</p>
                    </div>
                    <div className="bg-green-700 rounded px-6 py-6 ">
                        <h5 className="flex items-center justify-between text-2xl">CUSTOMERTS
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-3xl pt-6 font-bold">1500</p>
                    </div>
                    <div className="bg-red-700 rounded px-6 py-6 ">
                        <h5 className="flex items-center justify-between text-2xl">STOREOWNER
                            <BsFillArchiveFill />
                        </h5>
                        <p className="text-3xl pt-6 font-bold">500</p>
                    </div>
                </div>

                <div className="flex mt-28">
                    <div className="px-4">
                        <ResponsiveContainer width={700} height={400}>
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
                    <div className="px-4">
                        <LineChart width={700} height={400} data={data1}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;

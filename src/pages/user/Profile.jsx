import Navbar from "../../components/navbar/Navbar";
import Slidebar from "../../components/slidebar/Slidebar";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {getMyProfile, updateProfile} from "../../redux/profile/profileThunks"
import { uploadSingleFile } from "../../redux/file/fileThunks";
const Profile = () => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const [confirm, setConfirm] = useState(false);
    const {data} = useSelector((state) => state.profile)
    const {user} = useSelector((state) => state.auth)
    const [profile, setProfile]= useState({
        id: '',
        fullName: '',
        dateOfBirth: '',
        address: '',
        avatarUrl:'',
        gender: ''
    })

    useEffect(()=>{
        dispatch(getMyProfile()).unwrap().then((res)=>{
            setProfile({
                id: res?.id,
                fullName: res?.fullName,
                dateOfBirth: res?.dateOfBirth,
                address: res?.address,
                avatarUrl: res?.avatarUrl,
                gender: res?.gender
            })
        })
    },[])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const data = new FormData()
        data.append('file', file)
        dispatch(uploadSingleFile(data)).unwrap().then((res)=>{
            setProfile({ ...profile, avatarUrl: res });
        })
    };

    const submit = () =>{
        dispatch(updateProfile(profile))
    }
    return (
        <div className="dark:bg-gray-700 dark:text-white h-screen">
            <Navbar />
            <Slidebar />
            <div className="w-[80%] lg:flex justify-between mx-auto mt-16  ">
                <div className="w-full lg:w-[50%] shadow-2xl dark:shadow-[#00000094] rounded-lg px-4 py-4 border-profile">
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Name:</h3>
                        <input 
                            type="text" className="input  dark:text-black" placeholder="Full name" 
                            value={profile.fullName} 
                            onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                        />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Email:</h3>
                        <input type="text" className="input  dark:text-black" disabled={true} placeholder="phuoc@gmail.com" 
                                                    value={user.email} 
                                                    // onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <div className="w-full md:w-[70%] xl:w-[60%] flex items-center justify-between">
                            <h3 className="text-xl font-medium py-4">Birthdate:</h3>
                            <DatePicker className="input dark:text-black" selected={startDate} 
                            onChange={(date) => {
                                setStartDate(date);
                                setProfile({...profile,dateOfBirth: date.toISOString()})
                            }} 
                            />
                        </div>
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <div className="md:w-[70%] xl:w-[60%] flex items-center justify-between">
                            <h3 className="text-xl font-medium py-4">Gender:</h3>
                            <select className="input w-[30%]" name="" id="" onChange={(e)=>(setProfile({...profile, gender: e.target.value}))}>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Phone:</h3>
                        <input type="text" className="input  dark:text-black" disabled={true} placeholder="0905886611" 
                                                    value={profile.fullName} 
                                                    onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                        />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <h3 className="text-xl font-medium py-2">Address:</h3>
                        <input type="text" className="input  dark:text-black" placeholder="117 Nguyen Tri Phuong" 
                                                    value={profile.address} 
                                                    onChange={(e) => setProfile({...profile, address: e.target.value})}
                        />
                    </div>
                    <div className="w-[85%] mx-auto mt-2">
                        <div className="md:w-[70%] xl:w-[60%] flex items-center justify-between">
                            <h3 className="text-xl relative font-medium py-2">Would you like to create a store?</h3>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" onClick={() => { setConfirm(!confirm) }} />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                                dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all 
                                dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>
                        {confirm ? <>
                            <h3 className="text-2xl font-semibold text-red-500 text-center">Warning!!!</h3>
                            <p className="text-lg font-medium">You must wait for the administrator's approval for your store opening request within 24 hours.</p>
                        </>
                            :
                            ""}
                    </div>

                    <div className="flex justify-center">
                        <button className="btn-product  max-lg:w-[30%] mt-8" onClick={()=>{
                            submit()
                        }}>Submit</button>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] max-md:ml-[10%] ">
                    <img class="w-[600px] h-[600px] rounded-full shadow-2xl shadow-zinc-600 dark:shadow-[#00000094]  "
                        src={profile ? profile?.avatarUrl : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    <input className="block w-[80%] shadow-2xl shadow-zinc-600 dark:shadow-[#00000094] text-base mt-14 text-gray-900 border border-gray-500 rounded-lg 
                    cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 " id="file_input" type="file" onChange={handleImageChange}></input>
                </div>
            </div>
        </div>
    )
}

export default Profile;
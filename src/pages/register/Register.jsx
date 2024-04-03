import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/auth/authThunks";

const Register = (props) => {
  const dispatch = useDispatch()
  function handleRegister(e) {
    e.preventDefault();
    props.toggle();
  }
  const [user, setUser]= useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const register = () =>{
    if(user.password !== confirmPassword){
      return 
    }
    dispatch(registerAction(user));
  }
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <div className=" w-full fixed top-0 left-0  items-center justify-center " onSubmit={handleRegister}>
      <div className="w-[60%] fixed top-[25%] left-[25%] bg-[#f5f0f0] rounded-lg shadow-2xl flex">
        <form className=" w-[60%] py-[30px] grid justify-items-center  ">
          <h2 className="text-3xl font-semibold mb-4 text-black">Sign Up</h2>
          <div class="mb-4 w-[80%] flex justify-between text-black">
            <input type="text" placeholder="First Name" className="w-[45%] input" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})}/>
            <input type="text" placeholder="Last Name" className="w-[45%] input" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})}/>
          </div>
          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Email" className="input" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
          </div>

          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Password" className="input"  value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
          </div>
          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Re-password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn" onClick={()=>{register()}}>Sign Up</button>
        </form>
        <div className="w-[60%] bg-blue-700 flex items-center justify-center clip-polygon rounded-md">
          <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />
        </div>
        <button
          className="absolute top-3 right-3"
          onClick={      props.toggle}
        >
          <IoMdClose className="text-3xl bg-white text-gray-500 rounded-lg hover:text-black" />
        </button>
      </div>
    </div>
  )
}

export default Register;
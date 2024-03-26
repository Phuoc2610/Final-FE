import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react';

const Register = (props) => {
  function handleRegister(e) {
    e.preventDefault();
    // Add your login logic here (e.g., API calls, validation)
    props.toggle(); // Close the popup form
  }
  return (
    <div className=" w-full fixed top-0 left-0  items-center justify-center " onSubmit={handleRegister}>
      <div className="w-[60%] fixed top-[25%] left-[25%] bg-[#f5f0f0] rounded-lg shadow-2xl flex">
        <form className=" w-[60%] py-[30px] grid justify-items-center  ">
          <h2 className="text-3xl font-semibold mb-4 text-black">Sign Up</h2>
          <div class="mb-4 w-[80%] flex justify-between text-black">
            <input type="text" placeholder="First Name" className="w-[45%] input" />
            <input type="text" placeholder="Last Name" className="w-[45%] input" />
          </div>
          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Email" className="input" />
          </div>

          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Password" className="input" />
          </div>
          <div class="mb-4 w-[80%] text-black">
            <input type="text" placeholder="Re-password" className="input" />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="w-[60%] bg-blue-700 flex items-center justify-center clip-polygon rounded-md">
          <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />
        </div>
        <button
          className="absolute top-3 right-3"
          onClick={props.toggle}
        >
          <IoMdClose className="text-3xl bg-white text-gray-500 rounded-lg hover:text-black" />
        </button>
      </div>
    </div>
  )
}

export default Register;
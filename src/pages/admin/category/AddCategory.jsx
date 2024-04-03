import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../redux/category/categoryThunks";
import { useState } from "react";

const AddCategory = (props) => {
    function handleAddCategory(e) {
        e.preventDefault();
        // Add your login logic here (e.g., API calls, validation)
        props.toggle(); // Close the popup form
    }
    const dispatch = useDispatch()
    const [name, setName]= useState()
    const addCategory = ()=>{
        dispatch(createCategory({name: name}))
    }
    return (
        <div className=" w-full fixed top-0 left-0 z-20 items-center justify-center " onSubmit={handleAddCategory}>
            <div className="w-[50%] fixed top-[25%] left-[30%] bg-[#f5f0f0] rounded-lg shadow-2xl flex">
                <form className=" w-[60%] py-[30px] grid justify-items-center  ">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Add Category</h2>
                    <div class="mb-4 w-[80%] text-black">
                        <input type="text" placeholder="CategoryName" className="input" value={name} onChange={(e) => (setName(e.target.value))}/>
                    </div>

                    <button type="submit" className="btn" onClick={()=>{addCategory()}}>Create</button>
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

export default AddCategory;
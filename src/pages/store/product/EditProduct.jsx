import { IoMdClose } from "react-icons/io";

const EditProduct = (props) => {
    function handleEditProduct(e) {
        e.preventDefault();
        // Add your login logic here (e.g., API calls, validation)
        props.toggle(); // Close the popup form
    }
    return (

        <div className=" w-full fixed top-0 left-0 z-50 items-center justify-center " onSubmit={handleEditProduct}>
            <div className="w-[50%] fixed top-[25%] left-[30%] bg-[#f5f0f0] rounded-lg shadow-2xl flex">
                <form className=" w-[70%] py-[30px] grid justify-items-center  ">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Edit Product</h2>

                    <div class="mb-4 w-[80%] text-black">
                        <input type="text" placeholder="CategoryName" className="input" />
                    </div>
                    <div class="mb-4 w-[80%] flex justify-between text-black">
                        <input type="text" placeholder="Price" className="w-[35%] input" />
                        <select name="category" id="" className="w-[45%] input">
                            <option selected="" >Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div class="mb-4 w-[80%] text-black">
                        <input type="text" placeholder="Description" className="input " />
                    </div>
                    <button type="submit" className="btn">Update</button>
                </form>
                <div className="w-[50%] bg-blue-700 flex items-center justify-center clip-polygon rounded-md">
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

export default EditProduct;
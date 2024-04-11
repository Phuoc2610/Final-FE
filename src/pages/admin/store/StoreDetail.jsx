import { IoMdClose } from "react-icons/io";

const StoreDetail = (props) => {
    function handleStoreDetail(e) {
        e.preventDefault();
        // Add your login logic here (e.g., API calls, validation)
        props.toggle(); // Close the popup form
    }

    return (
        <div className=" w-full fixed top-0 left-0 z-20 items-center justify-center " onSubmit={handleStoreDetail}>
            <div className="w-[50%] fixed top-[25%] left-[30%] bg-[#f5f0f0] rounded-lg shadow-2xl ">

                <h2 className="text-3xl font-semibold my-4 text-black text-center">Store Detail</h2>
                <div className="flex py-4">
                    <div className="w-[60%] pl-10">
                        <div className="detail-info">
                            <h3 className="text-xl font-medium">Name:</h3>
                            <p className="text-lg ">Store FPT</p>
                        </div>
                        <div className="detail-info">
                            <h3 className="text-xl font-medium">Email:</h3>
                            <p className="text-lg ">FPT@gmail.com</p>
                        </div>
                        <div className="detail-info">
                            <h3 className="text-xl font-medium">Phone:</h3>
                            <p className="text-lg ">0905886611</p>
                        </div>
                        <div className="detail-info">
                            <h3 className="text-xl font-medium">Address:</h3>
                            <p className="text-lg ">89 Phuoc Ly 1</p>
                        </div>
                        <div className="py-2">
                            <h3 className="text-xl font-medium">Description:</h3>
                            <p className="text-lg pl-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ratione repellat ab quibusdam obcaecati iste eum natus,
                                doloremque illum nisi molestias neque voluptatem, mollitia labore ipsa facere. Doloremque, consequuntur veniam?</p>
                        </div>
                    </div>
                    <div className="w-[40%] ">
                        <img class="w-[90%] rounded-full shadow-2xl shadow-zinc-600 dark:shadow-[#00000094]  "
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
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

export default StoreDetail;
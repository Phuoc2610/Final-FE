import { FiSend } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";
import Navbar from "../../components/navbar/Navbar";
import Slidebar from "../../components/slidebar/Slidebar";
import { useEffect, useState } from "react";
import ImageDetails from "./ImageDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/product/productThunks";
import { createOrder } from "../../redux/order/orderThunks";
import { createFeedback } from "../../redux/feedback/feedBackthunk";
import Feedback from "react-bootstrap/esm/Feedback";

const Details = () => {
    const [ answer, setAnswer] = useState(false);
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate();
    const [imageDetails, setImageDetails] = useState(false);
    const { user } = useSelector((state) => state.auth)
    function popImageDetails() {
        setImageDetails(!imageDetails);
    }
    const [quantity, setQuantity] = useState(1)
    const { details } = useSelector((state) => state.product)
    console.log(user)
    const [content, setContent] = useState()
    useEffect(() => {
        dispatch(getProductById({ id: id }))
    }, [id])
    const upQuantity = () => {
        if (quantity >= details.quantity) {
            alert('full')
            return
        }
        setQuantity(quantity + 1)
    }
    const removeQuantity = () => {
        setQuantity(quantity - 1)
        if (quantity === 1) {
            alert('khong the nho hon 0')
            setQuantity(1)
            return
        }
    }

    const addFeedBack = () => {
        dispatch(createFeedback(
            {
                content: content,
                userId: user.id,
                productId: id
            }
        ))
    }
    const submit = () => {
        dispatch(createOrder({
            storeId: details?.store?.id,
            price: details?.price,
            productId: details?.id,
            quantity: quantity
        })).unwrap().then((res) => {
            navigate('/cart')
        })
    }
    return (
        <div className="w-full dark:bg-[#0f183a]   dark:text-white" >
            <Navbar />
            <Slidebar />
            <h2 className="text-3xl text-center font-bold pt-6">Product Detail</h2>
            <div className="w-[95%] md:w-[80%] mx-auto mt-4 xl:flex ">
                <div className='w-[50%] py-4 max-xl:w-[80%] max-xl:mx-auto'>
                    <button onClick={popImageDetails}>
                        <img className="w-full h- border-image" src={details?.productImages?.[0]?.url} alt="" />
                    </button>
                    <div className="w-full grid grid-cols-5 gap-1">
                        {details?.productImages?.map((item) => (
                            <img className="w-full h-full border-image" src={item?.url} alt="" />

                        ))}
                    </div>
                </div>
                {imageDetails ? <ImageDetails toggle={popImageDetails} /> : null}

                <div className="w-[50%] py-4 px-4 max-xl:w-[80%] max-xl:mx-auto">
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold mr-6">Name: </h3>
                        <p className="py-2 text-center text-xl">{details?.name}</p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-2xl font-semibold mr-6">Store: </h3>
                        <p className="py-2 text-center text-xl">{details?.store?.name}</p>
                    </div>
                    <div className="flex items-center ">
                        <h3 className="text-2xl font-semibold mr-6">Category: </h3>
                        <p className="text-xl ">Vegetables</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-semibold ">Description: </h3>
                        <p className="py-2 px-4">
                            {details?.description}
                        </p>
                    </div>

                    <div className="pb-2 flex items-center">
                        <h3 className="text-2xl font-semibold mr-6">Price: </h3>
                        <div>
                            <p className="text-xl  px-2 ">{details?.price * quantity}$</p>
                        </div>
                    </div>
                    <div className="flex">
                        <h3 className="text-2xl font-semibold mr-6">Số lượng: </h3>
                        <div className="flex items-center">
                            <button className="p-1 rounded-sm border border-black dark:border-white">
                                <FaMinus onClick={() => (removeQuantity())} />
                            </button>
                            <p className="px-2 mx-2 rounded-sm border border-black dark:border-white">{quantity}</p>
                            <button className="p-1 rounded-sm border border-black dark:border-white">
                                <FaPlus onClick={() => (upQuantity())} />
                            </button>
                        </div>
                    </div>
                    <button className="w-[25%] max-md:w-[55%] py-[14px] btn-product mt-4" onClick={() => { submit() }}>Add to Card</button>

                </div>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto overflow-y overflow-y-auto mt-20 ">
                <h3 className="font-bold text-center text-2xl pt-4 py-2">Feedback</h3>
                <div className="flex question">
                    <div class="ml-4 w-[80%] text-black">
                        <input type="text" placeholder="Hãy đặt câu hỏi thắc mắc cho chúng tôi" className="input border-1 h-16 border-black dark:bg-gray-700 dark:text-white" value={content} onChange={(e) => { setContent(e.target.value) }} />
                    </div>
                    <div className="flex items-center bg-red-600 hover:bg-red-700 text-white h-10 px-2 ml-4 rounded-md">
                        <FiSend className="text-[17px] mr-2 " />
                        <button className="text-lg font-semibold " onClick={() => { addFeedBack() }}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="py-6 px-4 answer" >
                    {details?.feedback?.map((item) => {
                        return (
                            <>
                                <div className="py-4">
                                    <div key={item?.id} className={`avatar flex justify-start ${item.userId === details.store.userId ? "avatar flex justify-end" : ""} `}>
                                        <div className="w-8 h-8 rounded-full mb-2">
                                            <img src={item?.user?.profile?.avatarUrl} />
                                        </div>
                                        <span className="ml-4 text-lg font-semibold">{item.user.email}</span>
                                    </div>
                                    <p className="mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] dark:bg-gray-700 dark:text-white">
                                        {item?.content}
                                        <button className="flex items-center justify-end w-full text-lg text-red-600 font-medium" onClick={()=>{setAnswer(!answer)}}>
                                        <MdQuestionAnswer className="text-xl mr-2"/>
                                            Answer
                                        </button>
                                    </p>
                                    {answer?
                                    <>
                                    <p className="mt-4 mx-auto py-4 px-4 rounded-lg border-2 shadow-2xl border-black w-[90%] dark:bg-gray-700 dark:text-white">

                                    </p>
                                    </>:""}

                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Details;
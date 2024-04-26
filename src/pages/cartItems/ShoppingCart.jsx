import Navbar from "../../components/navbar/Navbar";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Stepper from "./Stepper";
import Slidebar from "../../components/slidebar/Slidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderById, getOrderByUser } from "../../redux/order/orderThunks";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import { openMessage } from "../../redux/modal/modalSlice";
import CheckoutForm from "./CheckOutForm";
import { confirmPayment, createBill } from "../../redux/payment/paymentThunks";
import { Link } from 'react-router-dom';
import { removeProductFromOrder } from "../../redux/order/orderSlice";

const stripePromise = loadStripe(
    "pk_test_51P5H2IHvaAsUbu8t8GdnXyEa4o6OPhwAcs0qBSeY0eGe81Xc3ZypRezKHTTfaOP9pESBzYemgYJJ2EEaCernZ56T00ekwsu9tb"
);

const ShoppingCart = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const { details, loading } = useSelector((state) => state.order)
    const [quantity, setQuantity] = useState(1);
    const [elements, setElements] = useState(null);
    const [message, setMessage] = useState(null);
    const [stripe, setStripe] = useState(null);
    const [payment, setPayment] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const handleRemoveItem = (itemId) => {
        dispatch(removeProductFromOrder(itemId));
        // Optionally display a message or update local state as necessary
    };
    const handleStripeElementsSet = (stripe, elements) => {
        setStripe(stripe);
        setElements(elements);
    };
    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };
    useEffect(() => {
        if (details?.status == "PENDING" && loading) {
            dispatch(
                createBill({
                    amount: details?.totalPrice,
                    currency: "usd",
                    orderId: id,
                })
            )
                .unwrap()
                .then((result) => {
                    setClientSecret(result.clientSecret);
                });
        }
    }, [details]);
    const billId = clientSecret.split('_secret_')[0];
    const handleSubmmit = async (e) => {
        e.preventDefault();
        if (payment === true) {
            await handlerpayment().then((res) => {
                dispatch(confirmPayment({ orderId: id })).unwrap((res) => {
                    console.log(res)
                })
            });
        }
        setPayment(true)
        console.log(elements)

    };
    const handlerpayment = async () => {
        if (!stripe || !elements) {
            return;
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000",
            },
            redirect: 'if_required'
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                console.log("error.message");
            } else {
                dispatch(openMessage("An unexpected error occurred.", 'error'));
            }
        } else {
            await dispatch(confirmPayment({ orderId: id })).unwrap().then((res) => {
                setCurrentStep(3);
            })

        }
    }
    console.log(details)
    useEffect(() => {
        dispatch(getOrderById(id))
    }, [])
    const upQuantity = () => {
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
    return (
        <div className="h-screen w-full dark:bg-gray-800 dark:text-white">
            <Navbar />
            <Slidebar />
            <div className="w-full md:w-[80%] mx-auto mt-[3%]">
                <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
                {details ? (
                    <>
                {currentStep === 1 && (
                    <>
                        <h1 className="max-md:text-center text-4xl font-semibold mt-6">Shopping cart items</h1>
                        <table className="w-full lg:w-[60%] text-center my-10 border border-gray-200 dark:border-gray-700">
                            <thead className="text-xl bg-[#cfcfcf] dark:bg-gray-700">
                                <tr>
                                    <th></th>
                                    <th>ProductName</th>
                                    <th>Image</th>
                                    <th>Quality</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details?.orderDetail?.map((item) => (
                                    <tr className="border-t dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                        <td></td>
                                        <td >{item?.product?.name}</td>
                                        <td className="w-[20%] ">
                                            <img className="w-full" src="https://media.loveitopcdn.com/1254/thumb/nho-den-khong-hat-my-nhobonmuacom-2.jpg" alt="" />
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-center">
                                                <button>
                                                    <FaMinus onClick={() => (removeQuantity())} />
                                                </button>
                                                <p className="px-2 mx-2 border rounded-sm border-black dark:border-white ">{quantity}</p>
                                                <button>
                                                    <FaPlus onClick={() => (upQuantity())} />
                                                </button>
                                            </div>
                                        </td>
                                        <td>{item?.price * quantity}$</td>
                                        <td><button className="btn btn-error dark:text-white" onClick={() => handleRemoveItem(item.id)}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <h1 className="max-md:text-center text-4xl font-semibold mt-6">Payment Info</h1>
                        <div className="w-full lg:w-[60%] mt-10 px-2">
                            {message && <div id="payment-message" className="text-red-500">{message}</div>}
                            {clientSecret && (
                                <Elements options={options} stripe={stripePromise}>
                                    <CheckoutForm onStripeElementsSet={handleStripeElementsSet} />
                                </Elements>
                            )}
                        </div>
                    </>
                )}
                {currentStep === 3 && (
                    <div className="flex flex-col items-center justify-center mt-10">
                        <FaCheckCircle className="text-[120px] text-[#00a96e]" />
                        <h1 className="text-4xl font-semibold">Payment Successful!</h1>
                        <p className="text-lg mt-2">Thank you for your purchase.</p>
                        <Link className="btn btn-success mt-4" to="/">
                            Back to Shop
                        </Link>
                    </div>
                )}
                    </>
                ) : (<>
                </>)}
            </div>
            {(currentStep === 1 || currentStep === 2) && (
                <div className="lg:w-[30%] lg:fixed lg:right-[8%] lg:top-[30%] shadow-xl rounded-lg bg-gray-200 dark:bg-[#2e2e2f] ">
                    <h2 className="text-2xl py-4 text-center font-semibold border-b-2 border-black dark:border-gray-700">Summary</h2>
                    <div className="flex justify-between py-4 px-4 text-lg">
                        <h4 className="">Total products:</h4>
                        <p className="font-medium">{details?.orderDetail?.length}</p>
                    </div>
                    <div className="flex justify-between py-4 px-4 text-lg">
                        <h4 className="">Shipping costs:</h4>
                        <p className="font-medium">Free</p>
                    </div>
                    <div className="flex justify-between py-4 px-4 text-lg font-bold border-t-2 border-black dark:border-gray-700">
                        <h4 className="">Total:</h4>
                        <p>{details?.totalPrice}$</p>
                    </div>
                    <div className="grid justify-items-center my-4">
                        {currentStep === 1 && (
                            <button className="btn btn-success w-[30%]" onClick={() => setCurrentStep(2)}>
                                Checkout
                            </button>
                        )}
                        {currentStep === 2 && (
                            <button className="btn btn-success w-[30%]" onClick={handleSubmmit}>
                                Confirm Payment
                            </button>
                        )}
                    </div>
                </div>
            )}

        </div>
    )

}

export default ShoppingCart;
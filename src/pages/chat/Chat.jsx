import React, { useState } from 'react';


const Chat = () => {
    const [lastMessages, setLastMessages] = useState({
        user1: 'Hello! How are you?',
        user2: 'Hi! I am good, thank you!',
    });
    return (
        <div>
            <div className="lg:flex h-screen overflow-hidden ">
                {/* Side Left */}
                <div className="w-[100%] h-[40%] lg:w-[40%] lg:h-full xl:w-[25%] bg-slate-400 p-4 overflow-y overflow-y-auto">
                    <div className="text-2xl font-bold mb-4 text-center">K Mart</div>
                    {/* Search bar */}
                    <div className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {/* List of users */}
                    <div className="flex flex-col my-6 ">
                        <div className="flex items-center my-2 py-2 px-5 rounded-lg bg-slate-500">
                            <div className="avatar">
                                <div className="w-16 h-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="flex-grow text-xl ml-6 font-semibold ">
                                <h2 className="">User 1</h2>
                                <p className="">{lastMessages.user1}</p>
                            </div>
                        </div>
                        <div className="flex items-center my-2 px-5 ">
                            <div className="avatar">
                                <div className="w-16 h-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="flex-grow text-xl ml-6 font-bold">
                                <h2>User 2</h2>
                                <p className="">{lastMessages.user2}</p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Chat Section */}
                <div className="w-[100%] h-[60%] lg:w-[60%] lg:h-full xl:w-[75%] p-4 flex flex-col ">
                    {/* Chat header */}
                    <div className="text-2xl font-bold mb-4 text-center">
                        Message
                    </div>

                    {/* Chat messages */}
                    <div className="flex flex-col flex-grow overflow-y-auto mb-4 pr-6">
                        <div className="flex items-center mb-2">
                            <div className="bg-gray-300 p-2 rounded-lg ml-2 font-bold">Hello!</div>
                        </div>
                        <div className="flex items-center mb-2 justify-end">
                            <div className="bg-blue-500 p-2 rounded-lg ml-2 font-bold">Hi there</div>
                        </div>
                    </div>


                    {/* Message input and send button */}
                    <div className="flex ">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="input input-bordered w-full "
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium w-[20%] lg:w-[15%] xl:w-[10%] ml-2 rounded-lg">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
const Navbar = () => {
    return (
        <>
          <nav>
            <div className="flex justify-around bg-blue-800">
                <div>
                    <h2 className="text-white mt-2">K Mart</h2>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mx-3 mt-3 text-lg text-white hover:underline ">Home</li>
                        <li className="mx-3 mt-3 text-lg text-white hover:underline">About</li>
                        <li className="mx-3 mt-3 text-lg text-white hover:underline">Contact</li>
                        <li className="mx-3 mt-3 text-lg text-white hover:underline">Login</li>
                        <li className="mx-3 mt-3 text-lg text-white hover:underline">Register</li>
                    </ul>
                </div>
            </div>
          </nav>
        </>
    )
}

export default Navbar;
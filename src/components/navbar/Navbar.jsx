const Navbar = () => {
    return (
        <>
          <nav className="sticky top-0 z-10">
            <div className="flex justify-around bg-[#233a95] py-2">
                <div>
                    <h2 className="text-white mt-2 text-2xl">K Mart</h2>
                </div>
                <div>
                    <ul className="flex pb-2">
                        <li className="mx-3 mt-3 text-lg text-white hover:underline">Home</li>
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


const Search = () => {

    return (
        <div className="dark:bg-[#0f183a] pt-6" >
            <div className=" w-[90%] mx-auto  rounded-lg">
                <div className="search product">
                    <h1 className="text-center text-3xl font-bold pb-4 dark:text-white">Products</h1>
                    <div className="input input-bordered flex items-center gap-2 w-[60%] mx-auto dark:bg-gray-700 dark:text-white ">
                        <input type="text" className="grow " placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 dark:opacity-100">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-[100%] lg:w-[80%] mx-auto flex justify-around mt-6">
                        <select name="category" id="" className="select-search">
                            <option selected>Choose category</option>
                            <option value="">Meats</option>
                            <option value="">Seafood</option>
                            <option value="">Vegetables</option>
                            <option value="">Fruits</option>
                        </select>
                        <select name="store" id="" className="select-search">
                            <option selected>Choose store</option>
                            <option value="">A</option>
                            <option value="">B</option>
                            <option value="">C</option>
                            <option value="">D</option>
                        </select>
                        <select name="price" id="" className="select-search">
                            <option selected>Choose price</option>
                            <option value="">Low to High</option>
                            <option value="">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Search;
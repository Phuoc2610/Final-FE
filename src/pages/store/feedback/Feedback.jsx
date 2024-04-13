const Feedback = () => {
    return (
        <div className="h-[93vh] flex justify-between  bg-white text-black">
            <div className="w-[35%]">
                <div className="overflow-y overflow-y-auto px-4 pt-6">
                    <div className="text-2xl font-bold mb-4 text-center">List Product</div>
                    <div className="input input-bordered flex items-center gap-2 ">
                        <input type="text" className="grow " placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className="w-[65%] px-4 border-l-2 border-gray-800">
                <div className="text-2xl font-bold mb-4 text-center pt-6">Feedback</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem autem aliquid perferendis nemo eius ab expedita labore,
                    dicta sapiente nihil vero deserunt fuga error debitis necessitatibus tempore repudiandae ducimus modi praesentium consequatur!
                    Cupiditate dicta delectus itaque doloribus esse repellendus nulla amet, rem veniam quibusdam? Pariatur ratione quaerat cum inventore maiores,
                    nesciunt minus nihil obcaecati consequatur delectus iure accusamus alias laudantium, tempora odit deleniti laborum blanditiis numquam exercitationem,
                    eum asperiores repellendus iste? Velit hic, quasi molestias eaque maiores dolore aperiam beatae? Iusto repellat earum atque eligendi
                    molestiae reiciendis sint non nulla fugit, vero recusandae suscipit dolores excepturi consectetur omnis cum neque?</p>
            </div>
        </div>
    )
}

export default Feedback;
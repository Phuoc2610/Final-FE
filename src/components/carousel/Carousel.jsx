const Carousel = () => {
    return (
        <div>
          <img className="w-full h-80v relative" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner8.jpg" alt="" />

          <div className="absolute top-60 left-80">
            <div className="flex">
            <div>
                <h3 className="text-white text-5xl">Stay home & we will 
                <br /> 
                 deliver your daily need's</h3>

                 <button className="bg-red-700 hover:bg-blue-600 duration-500 py-2 px-4 rounded text-white font-bold mt-10">Shop Now</button>
            </div>
            <div>
            <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />
            </div>
            </div>
          </div>
        </div>
    )
}

export default Carousel;
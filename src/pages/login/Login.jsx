const Login = () => {
  return (
    <div className=" h-screen flex items-center justify-center rounded-lg">
      <div className="w-[50%]  rounded-lg shadow-2xl flex">
        <form className=" w-[50%] py-[30px] grid justify-items-center ">
          <h2 className="text-3xl font-semibold mb-4 ">Sign In</h2>
          <div class="mb-4 w-[80%] ">
            <input type="text" placeholder="Email" className="input" />
          </div>

          <div class="mb-4 w-[80%]">
            <input type="text" placeholder="Password" className="input" />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>

        <div className='w-[60%] bg-blue-700 flex items-center justify-center clip-polygon'>
        <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />

        </div>
      </div>
    </div>
  );
}

export default Login;
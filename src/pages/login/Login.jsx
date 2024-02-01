
const Login = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Đăng nhập</h2>

        <form>
          <div className="mb-4">
            <label for="username" className="block text-sm font-medium text-gray-600">Tên người dùng</label>
            <input type="text" placeholder="username" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="password" className="block text-sm font-medium text-gray-600">Mật khẩu</label>
            <input type="text" placeholder="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Đăng nhập</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
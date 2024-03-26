import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authThunks';
import { IoMdClose } from "react-icons/io";

const Login = (props) => {
  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    // Add your login logic here (e.g., API calls, validation)
    props.toggle(); // Close the popup form
  }
  return (
    <div className=" w-full h-full fixed top-0 left-0 items-center justify-center " onSubmit={handleLogin}>
      <div className="w-[60%] fixed top-[30%] left-[25%] bg-[#f5f0f0] rounded-lg shadow-2xl flex">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              console.log(values)
              dispatch(login(values))
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
            <Form className="w-[50%] py-[30px]  grid justify-items-center">
              <h2 className="text-3xl font-semibold mb-4 text-black">Sign In</h2>
              <div className="mb-4 w-[80%]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input text-black"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div className="mb-4 w-[80%]">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input text-black"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
              </div>
              <button type="submit" className="btn text-base" disabled={isSubmitting}>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div className="w-[60%] bg-blue-700 rounded-md py-4 flex items-center justify-center clip-polygon">
          <img
            className="w-full"
            src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png"
            alt=""
          />
        </div>
        <button
                className="absolute top-3 right-3"
                onClick={props.toggle}
              >
                <IoMdClose className="text-3xl bg-white text-gray-500 rounded-lg hover:text-black"/>
              </button>

      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';

// function Login(props) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   function handleLogin(e) {
//     e.preventDefault();
//     // Add your login logic here (e.g., API calls, validation)
//     props.toggle(); // Close the popup form
//   }

//   return (
//     <div className=" w-full h-full fixed top-0 left-0  bg-[#ffffff00]  items-center justify-center " onSubmit={handleLogin}>
//     <div className="w-[60%] fixed top-[25%] left-[25%] bg-white rounded-lg shadow-2xl flex">
//       <form className=" w-[60%] py-[30px] grid justify-items-center  ">
//         <h2 className="text-3xl font-semibold mb-4 text-black">Sign Up</h2>
//         <div class="mb-4 w-[80%] flex justify-between">
//           <input type="text" placeholder="First Name" className="w-[45%] input" />
//           <input type="text" placeholder="Last Name" className="w-[45%] input" />
//         </div>
//         <div class="mb-4 w-[80%] ">
//           <input type="text" placeholder="Email" className="input" />
//         </div>

//         <div class="mb-4 w-[80%]">
//           <input type="text" placeholder="Password" className="input" />
//         </div>
//         <div class="mb-4 w-[80%]">
//           <input type="text" placeholder="Re-password" className="input" />
//         </div>
//         <button type="submit" className="btn">Sign Up</button>
//       </form>

//       <div className='w-[60%] bg-blue-700 flex items-center justify-center clip-polygon'>
//       <img className="w-full" src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png" alt="" />

//       </div>
//     </div>
//   </div>
//   );
// }

// export default Login;
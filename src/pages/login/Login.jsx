import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authThunks';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen flex items-center justify-center rounded-lg">
      <div className="w-[50%] rounded-lg shadow-2xl flex">
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
            <Form className="w-[50%] py-[30px] grid justify-items-center">
              <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
              <div className="mb-4 w-[80%]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
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
                  className="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div className="w-[60%] bg-blue-700 flex items-center justify-center clip-polygon">
          <img
            className="w-full"
            src="https://p.w3layouts.com/demos_new/template_demo/06-10-2021/grocery-mart-liberty-demo_Free/794674028/web/images/banner-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const Login = () => (
  <div className="bg-dark h-screen flex flex-col justify-center items-center w-full p-4 lg:w-[50%]">
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col gap-2 max-w-[620px] w-full">
          <h1 className="text-3xl mb-4 font-medium self-start">Hey, hello👋</h1>
          <p className="mb-10 self-start">
            Enter your login credentials to sign in.
          </p>
          <label htmlFor="email" className="font-medium">
            email
          </label>
          <Field
            type="email"
            name="email"
            className={`bg-input h-12 p-1 rounded ${
              errors.email && "border border-error rounded"
            }`}
          />
          <ErrorMessage name="email" component="div" className="text-error" />
          <label htmlFor="password" className="font-medium">
            password
          </label>
          <Field
            type="password"
            name="password"
            className={`bg-input h-12 p-1 rounded ${
              errors.password && "border border-error rounded"
            }`}
          />
          <ErrorMessage name="password" component="div" />
          <Link
            to="/forgotpassword"
            className="text-white/50 self-end mb-4 underline"
          >
            forgot password?
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent rounded h-12 text-darker font-medium p-1 mb-6"
          >
            Login
          </button>
          <p className="text-white/50">
            Don't have an account?{" "}
            <Link to="signup" className="font-medium text-white underline">
              Sign Up.
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  </div>
)

export default Login

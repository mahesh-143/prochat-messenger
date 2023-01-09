import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const ResetPassword = () => {
  return (
    <div className="bg-dark h-screen flex flex-col justify-center items-center w-full p-4 lg:w-[50%]">
      <Formik
        initialValues={{ password: "", conpassword: "" }}
        validationSchema={Yup.object({
          password: Yup.string().required("Password is required"),
          conpassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password")], "Password do not match"),
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
            <h1 className="text-3xl mb-4 font-medium self-start">
              Set a new Password 🔒
            </h1>
            <p className="mb-10 self-start">Enter your new password.</p>
            <label htmlFor="password" className="font-medium">
              password
            </label>
            <Field
              type="password"
              name="password"
              className={`bg-input h-12 p-1 rounded mb-4 ${
                errors.password && "border border-error rounded"
              }`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-error"
            />
            <label htmlFor="conpassword" className="font-medium">
              confirm password
            </label>
            <Field
              type="password"
              name="conpassword"
              className={`bg-input h-12 p-1 rounded mb-4 ${
                errors.conpassword && "border border-error rounded"
              }`}
            />
            <ErrorMessage
              name="conpassword"
              component="div"
              className="text-error"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent rounded h-12 text-darker font-medium p-1 mb-6"
            >
              Submit
            </button>
            <p className="text-white/50">
              <Link to="/">Back to Login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ResetPassword

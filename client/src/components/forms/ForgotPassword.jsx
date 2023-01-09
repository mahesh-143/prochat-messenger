import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const ForgotPassword = () => {
  return (
    <div className="bg-dark h-screen flex flex-col justify-center items-center w-full p-4 lg:w-[50%]">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
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
              Forgot Password? 🤔{" "}
            </h1>
            <p className="mb-10 self-start">
              Enter your email, we'll send you reset instructions.
            </p>
            <label htmlFor="email" className="font-medium">
              email
            </label>
            <Field
              type="email"
              name="email"
              className={`bg-input h-12 p-1 rounded mb-4 ${
                errors.email && "border border-error rounded"
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-error" />
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

export default ForgotPassword

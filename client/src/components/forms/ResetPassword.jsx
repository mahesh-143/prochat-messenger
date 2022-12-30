import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"

const ResetPassword = () => {
  return (
    <div className="bg-dark h-screen flex flex-col justify-center items-center w-full p-4 lg:w-[50%]">
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = "required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col gap-2 max-w-[620px] w-full">
          <h1 className="text-3xl mb-4 font-medium self-start">Set a new Password 🔒
 </h1>
          <p className="mb-10 self-start">
          Enter your new password.
          </p>
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
          <ErrorMessage name="password" component="div" />
          <label htmlFor="conpassword" className="font-medium">
            confirm password
          </label>
          <Field
            type="password"
            name="conpassword"
            className={`bg-input h-12 p-1 rounded mb-4 ${
              errors.password && "border border-error rounded"
            }`}
          />
          <ErrorMessage name="password" component="div" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent rounded h-12 text-darker font-medium p-1 mb-6"
          >
            Submit
          </button>
          <p className="text-white/50"><Link to="/">Back to Login</Link></p>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default ResetPassword
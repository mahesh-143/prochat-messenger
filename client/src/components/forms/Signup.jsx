import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik"

const Signup = () => {
  return (
    <div className="bg-dark h-screen flex flex-col justify-center items-center w-full p-4 lg:w-[50%]">
    <Formik
      initialValues={{ email: "", password: "", username: "" }}
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
          <h1 className="text-3xl mb-4 font-medium self-start">Hey, welcome👋</h1>
          <p className="mb-10 self-start">
            Enter your details to create an account.
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
          <label htmlFor='username' className='font-medium'>
            username
          </label>
          <Field
            type="text"
            name="username"
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
            Sign Up
          </button>
          <p className="text-white/50">Already have an account? <Link to="/" className="font-medium text-white underline">Login.</Link></p>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Signup
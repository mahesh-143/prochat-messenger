// Render Prop
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

const Login = () => (
  <div className="h-screen w-full flex flex-col items-center">
    <h1 className="text-5xl font-medium m-8">Login</h1>
    <div className="bg-darker h-screen p-16">
      <div className="w-full">
        <h1 className="text-3xl mb-4 font-medium">Hey, hello👋</h1>
        <p className="mb-10">Enter your login credentials to sign in</p>
        <Formik
          initialValues={{ email: "", password: "" }}
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
            <Form className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium">email</label>
              <Field type="email" name="email" className={`bg-input h-8 p-1 rounded ${errors.email && "border border-error rounded"}`} />
              <ErrorMessage name="email" component="div" className="text-error"/>
              <label htmlFor="password" className="font-medium">password</label>
              <Field type="password" name="password" className={`bg-input h-8 p-1 rounded ${errors.password && "border border-error rounded"}`}/>
              <ErrorMessage name="password" component="div" />
              <span className="text-white/50 self-end mb-4">forgot password?</span>
              <button type="submit" disabled={isSubmitting} className="bg-accent rounded h-8 text-darker font-medium p-1">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
)

export default Login

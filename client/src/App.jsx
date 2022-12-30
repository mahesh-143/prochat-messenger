import Hero from "./components/Hero"
import Login from "./components/forms/Login"
import Signup from "./components/forms/Signup"
import ForgotPassword from "./components/forms/ForgotPassword"
import ResetPassword from "./components/forms/ResetPassword"
import LoginForm from "./components/forms/LoginForm"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="flex items-center justify-center m-auto">
    <Hero />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/forgotpassword" element={<ForgotPassword />}/>
      <Route path="/ResetPassword" element={<ResetPassword />}/>
    </Routes>
    </div>
  )
}

export default App

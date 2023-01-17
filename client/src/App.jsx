import { Routes, Route } from "react-router-dom"

import Login from "./components/forms/Login"
import Signup from "./components/forms/Signup"
import ForgotPassword from "./components/forms/ForgotPassword"
import ResetPassword from "./components/forms/ResetPassword"
import WithHero from "./layouts/WithHero"
import WithSidebar from "./layouts/WithSidebar"
import FindFriends from "./pages/FindFriends"
import Rooms from "./pages/Rooms"
import Chats from "./pages/Chats"
import UserInfo from "./layouts/UserInfo"
import NotFound from "./pages/NotFound"
import MyProfile from "./components/UI/MyProfile"

function App() {
  return (
    <>
      <Routes>

        <Route element={<WithSidebar />}>
        <Route path="/" element={<Chats />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/findfriends" element={<FindFriends />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/chats/:id" element={<Chats />} />
        <Route path="/findfriends/:id" element={<FindFriends />}/>
        <Route path="/rooms/:id" element={<Rooms />}/>
        <Route path="/user/:id" element={<UserInfo />}/>
        <Route path="/myprofile" element={<MyProfile />} />
        </Route>

        <Route element={<WithHero />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App

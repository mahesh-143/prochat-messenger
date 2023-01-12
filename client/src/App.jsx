import Login from "./components/forms/Login"
import Signup from "./components/forms/Signup"
import ForgotPassword from "./components/forms/ForgotPassword"
import ResetPassword from "./components/forms/ResetPassword"

import { Routes, Route } from "react-router-dom"
import WithHero from "./layouts/WithHero"
import WithSidebar from "./layouts/WithSidebar"
import Conversation from "./pages/Conversation"
import FindFriends from "./pages/FindFriends"
import Rooms from "./pages/Rooms"
import FriendRequest from "./pages/FriendRequests"
import Chats from "./pages/Chats"

function App() {
  return (
    <>
      <Routes>

        <Route element={<WithSidebar />}>
        <Route path="/" element={<Chats />} />
        <Route path="/findfriends" element={<FindFriends />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/friendrequests" element={<FriendRequest />} />
        <Route path="/chats/:id" element={<Conversation />} />
        </Route>

        <Route element={<WithHero />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        </Route>

      </Routes>
    </>
  )
}

export default App

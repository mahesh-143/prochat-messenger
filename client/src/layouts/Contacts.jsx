import { Route, Routes } from "react-router-dom"
import Contact from "../components/UI/Contact"

const user = [
    {
      username: "mahesh",
      id: "1",
      last_msg: "whats up",
    },
    {
      username: "Jon Doe",
      id: "2",
      last_msg: "hello my friend I have an offer for you",
    },
    {
      username: "Odedara",
      id: "3",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "4",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "5",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
    {
      username: "Odedara",
      id: "6",
      last_msg: "bye",
    },
  ]
const Contacts = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-dark border border-white/30 w-[25rem] overflow-y-scroll rounded scrollbar-thin scrollbar-thumb-input">{user.map((user, index) => {
        return <Contact key={index} user={user} />
      })}</div>
  )
}

export default Contacts
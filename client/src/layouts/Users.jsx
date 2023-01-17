import { Route, Routes } from "react-router-dom"
import User from "../components/UI/User"

const user = [
    {
      username: "Mahesh Odedara",
      id: "1",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Parth Parmar",
      id: "2",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Rutvik Sanathara",
      id: "3",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Dharmik Thanki",
      id: "4",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Sagar",
      id: "5",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Odedara",
      id: "6",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Ramesh",
      id: "7",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Erica",
      id: "8",
      bio:"Hey there I'm using ProChat",
    },
    {
      username: "Odedara",
      id: "9",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Odedara",
      id: "10",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Odedara",
      id: "11",
      bio: "Hey there I'm using ProChat",
    },
    {
      username: "Odedara",
      id: "12",
      bio: "Hey there I'm using ProChat",
    },
  ]
const Users = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-dark border border-white/30 w-[25rem] overflow-y-scroll rounded scrollbar-thin scrollbar-thumb-input">{user.map((user, index) => {
        return <User key={index} user={user} />
      })}</div>
  )
}

export default Users
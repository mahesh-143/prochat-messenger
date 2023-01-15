import { Route, Routes } from "react-router-dom"
import RoomCard from "../components/UI/RoomCard"

const room = [
    {
      roomname: "Classmates Chat",
      id: "1",
      total_participants: "12",
    },
    {
      roomname: "Unnamed Room",
      id: "2",
      total_participants: "23",
    },
    {
      roomname: "Existensialism",
      id: "3",
      total_participants: "22",
    },
    {
      roomname: "Random Room Name",
      id: "4",
      total_participants: "17",
    }
  ]
const RoomList = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-dark border border-white/30 w-[25rem] overflow-y-scroll rounded scrollbar-thin scrollbar-thumb-input">{room.map((room, index) => {
        return <RoomCard key={index} room={room} />
      })}</div>
  )
}

export default RoomList
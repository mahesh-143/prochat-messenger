import RoomList from "../layouts/RoomList"
import RoomChat from "../layouts/RoomChat"
import { useParams } from "react-router-dom"

const Rooms = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div className="flex w-full max-w-5xl bg-dark h-[95vh] my-auto mx-auto">
      <RoomList />
      <RoomChat roomId={id} />
    </div>
  )
}

export default Rooms

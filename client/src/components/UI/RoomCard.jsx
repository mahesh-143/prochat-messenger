import { Link } from "react-router-dom"
import Avatar from "react-avatar"

const RoomCard = (props) => {
  console.log(props)
  return (
    <Link
      to={"/rooms/" + props.room.id}
      className="py-4 px-5 flex items-center gap-4 bg-darker rounded my-1"
    >
      <Avatar className="rounded-full" size="60" />
      <div>
        <h1 className="font-medium mr-2 w-[150px] truncate">
          {props.room.roomname}
        </h1>
        <p className="opacity-50">
          participants {props.room.total_participants} /30
        </p>
      </div>
    </Link>
  )
}

export default RoomCard

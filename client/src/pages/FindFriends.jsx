import Users from "../layouts/Users"
import UserInfo from "../layouts/UserInfo"
import { useParams } from "react-router-dom"

const FindFriends = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div className="flex w-full max-w-5xl bg-dark h-[95vh] my-auto mx-auto">
      <Users />
      <UserInfo userId={id} />
    </div>
  )
}

export default FindFriends

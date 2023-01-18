import { Link } from "react-router-dom"
import Avatar from "react-avatar"

const User = (user) => {
  console.log(user)
  return (
    <Link to={'/findfriends/'+user.user.id} className="py-4 flex items-center gap-4">

      {/* <div className="rounded-full bg-yellow-500 h-[50px] w-[50px]"></div> */}
      <Avatar name={user.user.username} className="rounded-full" size="60"/>

      <div>

        <h1 className="font-medium mr-2 w-[150px] truncate">{user.user.username}</h1>

        <div className="flex items-center justify-between gap-6">
        <p className="underline">view profile</p>
        </div>
      </div>

    </Link>
  )
}

export default User

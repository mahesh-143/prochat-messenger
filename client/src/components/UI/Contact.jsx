import { Link } from "react-router-dom"

const Contact = (user) => {
  console.log(user)
  return (
    <Link to={'chats/'+user.user.id} className="py-4 flex items-center gap-4">

      <div className="rounded-full bg-yellow-500 h-[50px] w-[50px]"></div>

      <div>

        <h1 className="font-medium mr-2">{user.user.username}</h1>

        <div className="flex items-center justify-between gap-6">
        <p className="w-[70px] truncate">{user.user.last_msg}</p>
        <span className="text-white/50">7 : 58 PM</span>
        </div>
      </div>

    </Link>
  )
}

export default Contact

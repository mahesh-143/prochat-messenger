import UserInfo from "../../layouts/UserInfo"
import Avatar from "react-avatar"

const MyProfile = () => {
  return (
    <div className="text-2xl flex flex-col w-full border border-white/30 rounded">
    <div className="flex flex-col items-center mt-16 gap-5">
      <Avatar name="Odedara Mahesh" className="rounded-full" />
      <h1 className="font-medium text-5xl">Odedara Mahesh</h1>
      <p className="text-lg leading-7">Hey there I am using ProChat !!!</p>
      <button className="bg-accent px-3 py-2 rounded-[10px] text-lg font-medium flex items-center gap-1 text-black">
        Edit Profile
      </button>
    </div>
</div>
  )
}

export default MyProfile
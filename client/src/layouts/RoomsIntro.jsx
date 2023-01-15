import { UsersThree } from "phosphor-react"

const RoomsIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="border rounded-full p-5 w-[100px] h-[100px] flex items-center justify-center">
      <UsersThree size={60}/>
      </div>
      <h1>Chat Rooms</h1>
      <p className="text-lg">Join any room or click here to create a room</p>
      <button className="bg-accent px-3 py-2 rounded-[10px] text-lg font-medium flex items-center gap-1 text-black">Create Room</button>
    </div>
  )
}

export default RoomsIntro

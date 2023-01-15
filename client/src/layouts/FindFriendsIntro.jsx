import { Alien } from "phosphor-react"

const FindFriendsIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="border rounded-full p-5 w-[100px] h-[100px] flex items-center justify-center">
      <Alien size={60} /> 
      </div>
      <h1>Find Friends</h1>
      <p className="text-lg">Click on Users to view their profiles and send them Friend Request</p>
    </div>
  )
}

export default FindFriendsIntro

import { Popover } from "@headlessui/react"
import { UserCircleGear } from "phosphor-react"
import FriendRequest from "../components/UI/FriendRequest"

const friendrequest = [
{
  "id" : 1,
  "sender" : "Mahesh Odedara"
},
]

const friendrequestList = friendrequest.map((friendrequest, index) => {
  return <FriendRequest key={index} friendrequest={friendrequest}/> 
  })                 

const FriendRequests = () => {


  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-2">
        {" "}
        <UserCircleGear size={30} /> Friend Requests
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        {/* todo : add notifications here */}
        <div className="flex flex-col gap-2 mt-3 bg-body border border-white/30 rounded p-4 max-h-96 w-[20rem] overflow-y-auto scrollbar-thin  scrollbar-thumb-input"> 
        {friendrequestList.length > 0 ? friendrequestList : <h1>No friend request</h1>}
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default FriendRequests

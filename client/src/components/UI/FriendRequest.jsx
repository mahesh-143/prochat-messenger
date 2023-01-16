import React from "react"

const FriendRequest = (props) => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded bg-darker">
      <span>
        <strong>{props.friendrequest.sender}</strong> has sent you a friend
        request
      </span>
      <div className="flex gap-2">
        <button className="bg-accent p-2 rounded text-black">Accept</button>
        <button className="bg-input p-2 rounded">Decline</button>
      </div>
    </div>
  )
}

export default FriendRequest

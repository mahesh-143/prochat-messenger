import Contacts from "../layouts/Contacts"
import Conversation from "./Conversation"
import { useParams } from "react-router-dom"

import React from "react"

const Chat = () => {
    const { id } = useParams()
    console.log(id)
  return (
    <div className="flex w-full max-w-5xl bg-dark h-[95vh] my-auto mx-auto">
      <Contacts />
      <Conversation chatId={id}/>
    </div>
  )
}

export default Chat

import Contacts from "../layouts/Contacts"
import Conversation from "./Conversation"

import React from 'react'

const Chats = () => {
  return (    
    <div className="flex w-full max-w-6xl bg-dark h-[90vh] my-auto mx-auto">
        <Contacts />
        <Conversation />
    </div>
  )
}

export default Chats
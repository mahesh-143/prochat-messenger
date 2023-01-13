import Contacts from "../layouts/Contacts"
import Conversation from "./Conversation"

const Chats = () => {
  return (    
    <div className="flex w-full max-w-5xl bg-dark h-[95vh] my-auto mx-auto">
        <Contacts />
        <Conversation />
    </div>
  )
}

export default Chats
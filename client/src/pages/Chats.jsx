import Contacts from "../layouts/Contacts"
import Conversation from "../layouts/Conversation"
import { useParams } from "react-router-dom"

const Chats = () => {
  const { id } = useParams()
  console.log(id)
  return (    
    <div className="flex w-full max-w-5xl bg-dark h-[95vh] my-auto mx-auto">
        <Contacts />
        <Conversation chatId={id}/>
    </div>
  )
}

export default Chats
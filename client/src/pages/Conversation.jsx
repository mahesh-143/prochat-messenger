import ChatHeader from "../components/UI/ChatHeader"
import Message from "../components/UI/Message"
import MsgInput from "../components/UI/MsgInput"

const Conversation = (props) => {
  return (
  <div className='text-2xl flex flex-col w-full border border-white/30 rounded'>
    
  <ChatHeader chatId={props.chatId}/>
  <div className="h-sreen overflow-y-scroll scrollbar-thin scrollbar-thumb-input">
    <Message />
  </div>
  <MsgInput />
  </div>
  )
}


export default Conversation

import ChatHeader from "../components/UI/ChatHeader"
import Message from "../components/UI/Message"
import MsgInput from "../components/UI/MsgInput"
import ChatsIntro from "./ChatsIntro"

const Conversation = (props) => {
  console.log(props.chatId)
  return (
    <div className="text-2xl flex flex-col w-full border border-white/30 rounded">
      {props.chatId ? (
        <>
          <ChatHeader chatId={props.chatId} />
          <div className="h-sreen overflow-y-scroll scrollbar-thin scrollbar-thumb-input flex flex-col">
            <Message />
          </div>
          <MsgInput />
        </>
      ) : (
        <ChatsIntro />
      )}
    </div>
  )
}

export default Conversation

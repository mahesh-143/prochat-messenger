import ChatHeader from "../components/UI/ChatHeader"
import Message from "../components/UI/Message"
import MsgInput from "../components/UI/MsgInput"
import RoomsIntro from "./RoomsIntro"

const RoomChat = (props) => {
  console.log(props.roomId)
  return (
    <div className="text-2xl flex flex-col w-full border border-white/30 rounded">
      {props.roomId ? (
        <>
          <ChatHeader chatId={props.roomId} />
          <div className="h-sreen overflow-y-scroll scrollbar-thin scrollbar-thumb-input flex flex-col">
            <Message />
          </div>
          <MsgInput />
        </>
      ) : (
        <RoomsIntro />
      )}
    </div>
  )
}

export default RoomChat

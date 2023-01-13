import Avatar from "react-avatar"

const ChatHeader = (props) => {
  return (
    <div className='bg-darker p-4 border-b border-white/30 flex gap-4'>
        <Avatar name="Mahesh Odedara" className="rounded-full" size="60"/>
        <div>
        <h1 className="text-lg">ChatHeader {props.chatId}</h1>
        <span className="text-base text-white/50">Online</span>
        </div>
    </div>
  )
}

export default ChatHeader
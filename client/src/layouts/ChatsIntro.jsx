import { PaperPlaneTilt } from "phosphor-react"

const ChatsIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="border rounded-full p-5 w-[100px] h-[100px] flex items-center justify-center">
      <PaperPlaneTilt size={60}/>
      </div>
      <h1>Your chats</h1>
      <p className="text-lg">Send private messages to your friends</p>
    </div>
  )
}

export default ChatsIntro

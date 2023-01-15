import { PaperPlaneRight } from "phosphor-react"
const MsgInput = () => {
  return (
    <div className='sticky top-[100%] bottom-0 border border-white/30 p-4 flex gap-1'>
      <input className="bg-input p-2 rounded h-auto break-all text-lg w-full" placeholder="Message.."/>
      <button className="bg-accent rounded text-base font-medium px-4 py-2 text-black flex items-center gap-1">Send<PaperPlaneRight size={22} /></button>
      </div>
  )
}

export default MsgInput
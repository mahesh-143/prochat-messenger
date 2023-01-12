import React from "react"
import { useParams } from "react-router-dom"

const Conversation = () => {
  const { id } = useParams()
  return <div className='text-2xl flex items-center justify-center w-full h-sreen border border-white/30 overflow-y-scroll rounded scrollbar-thin scrollbar-thumb-input'>Conversation {id} </div>
}

export default Conversation

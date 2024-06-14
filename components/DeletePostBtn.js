"use client"

import { deletePost } from "@/actions/actions"
import { useRouter } from "next/navigation"
import DeleteModalPrompt from "./DeleteModalPrompt"
import { useState } from "react"

const DeletePostBtn = ({ id }) => {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const onOpenChange = () => {
    setOpen(!open)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    await deletePost(id)
    setIsDeleting(false)
    router.replace("/certificates")
  }
  return (
    <>
      {/* <button onClick={handleDelete}>Delete</button> */}
      <button className="px-5 py-1.5 text-sm bg-orange-600 rounded-full" onClick={onOpenChange}>Delete</button>
      <DeleteModalPrompt isDeleting={isDeleting} open={open} onOpenChange={onOpenChange} handleDelete={handleDelete} />
    </>
  )
}

export default DeletePostBtn
"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const getAllPosts = async () => {
  try {
    const response = await fetch("http://localhost:30001/posts")
    const data = await response.json()
    return JSON.parse(JSON.stringify(data))
  } catch (error) {
    console.log(error);
    return { error: "Error fetching posts" }
  }
}
export const createPost = async (data) => {
  try {
    const response = await fetch("http://localhost:30001/posts", {
      method: "POST",
      body: JSON.stringify(data)
    })
    revalidatePath('/certificates')
    return { message: "Post created successfully" }
  } catch (error) {
    console.log(error);
    return { error: error.message }
  }
}
export const getPost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:30001/posts/${(postId)}`, { cache: "no-store" })
    const data = await response.json()
    return JSON.parse(JSON.stringify(data))
  } catch (error) {
    console.log(error);
    return { error: error.message }
  }
}


export const deletePost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:30001/posts/${(postId)}`, {
      method: "DELETE"
    })
    revalidatePath("/certificates")
    return
  } catch (error) {
    console.log(error);
    return { error: error.message }
  }
}
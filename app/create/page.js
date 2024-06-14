"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import { createPost, getAllPosts } from '@/actions/actions'
import { v4 as uuidv4 } from 'uuid';

const Create = () => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    artist: "",
    artworkTitle: "",
    artworkFile: "",
    year:""
  })

  const createCertificate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let id
    const allPosts = await getAllPosts()
    if (allPosts.length === 0) {
      id = "1"
    } else {
      const lastPost = allPosts[allPosts.length - 1]
      id = String(Number(lastPost.id) + 1)
    }

    const artworkFile = "https://utfs.io/f/9944ded5-9ebb-4aba-88d4-a788ec0ac405-4cnqok.jpg"
    const certificate = uuidv4();

    const response = await createPost({
      id, certificate, artist: post.artist,
      artworkTitle: post.artworkTitle, year:post.year, artworkFile
    })
    if (response.error) alert(response.error)
    // alert(response.message)
    router.push("/certificates")

    setSubmitting(false)

  }

  return (
    <div className='w-1/2 p-4 mx-auto text-center'>

      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createCertificate}
      />
    </div>
  )
}

export default Create
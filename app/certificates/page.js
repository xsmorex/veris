import { getAllPosts } from '@/actions/actions'
import Feed from '@/components/Feed'
import React, { Suspense } from 'react'
export const dynamic = 'force-dynamic'

const page = async () => {
  const allPosts = await getAllPosts()
  if (allPosts.length === 0) return <div className='flex flex-col justify-center items-center p-5 mb-12 text-3xl font-bold'><h1>You haven't created any certificates yet.</h1></div>

  return (
    <section>
      <Feed allPosts={allPosts} />
    </section>
  )
}

export default page
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ post,
  handleTagClick }) => {
  const { id,
    certificate,
    artist,
    year,
    artworkTitle,
    artworkFile } = post
  return (
    <Link href={`/certificates/${id}`} className='p-4 rounded-md border-2 border-gray-200 w-full'>
      <div className='space-y-3'>
        <h1 className='text-center capitalize text-xl'>{artist}</h1>
        <h1 className='text-center capitalize text-xl'>{artworkTitle}</h1>
        <h1 className='text-center capitalize text-xl'>{year}</h1>
        <div className='w-full flex justify-center'>
          <Image src={artworkFile} width={200} height={200} alt={artworkTitle} />
        </div>
      </div>
    </Link>
  )
}

export default Card

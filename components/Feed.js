'use client'

import React from "react"
import { useState, useEffect } from 'react'

import Card from './Card'
const Feed = ({ allPosts }) => {
  // const [searchText, setSearchText] = useState('')
  // const handleSearchCahnge = (e) => {

  //   setSearchText(e.target.value)

  // }

  return (
    <section className='w-[96%] max-w-[1250px] mx-auto'>
      {/* <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='search for prompts'
          value={searchText}
          onChange={handleSearchCahnge}
          required
          className="text-black"
        />
        
      </form> */}
      <div className="grid p-4 md:p-6  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          allPosts.map((post) => <Card
            post={post}
            key={post.id}
            handleTagClick={() => { { } }}
          />)
        }
      </div>
    </section>
  )
}

export default Feed
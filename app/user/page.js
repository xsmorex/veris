"use client"

import {useState} from "react";

export default function page () {

  // const res = await fetch('https://dummyjson.com/posts/1');
  // const data = await res.json();

  const [isLiked, setIsLiked] = useState(false)

  const changeLike = () => {
    setIsLiked(!isLiked)
  }
  return (
    <div className="flex flex-col items-center">
      <button onClick={()=> setIsLiked(!isLiked)}>Change me</button>
      <button onClick={changeLike}>Change me</button>
      {isLiked ? <div>liked</div>:<div>not liked</div> }


    </div>
  )
}



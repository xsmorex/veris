
export default async function page() {

  const res = await fetch('https://dummyjson.com/posts/1');
  const data = await res.json();



  return (
    <div className="flex flex-col items-center">

      <div>liked</div>:<div>not liked</div>


    </div>
  )
}



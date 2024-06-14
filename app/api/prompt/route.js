export async function GET(request){
  //handles GET request for /api/certificates

  const posts = [
    { id: 1, name: "First"},
    { id: 2, name: "Second"},
    { id: 3, name: "Third"},
  ]


  try {
  //Send the certificates as a response
  return new Response(JSON.stringify(posts), {status: 200})
  } catch ( error) { 
    return new Response("Failed to fetch all data", { status: 500})
  }
}


// export async function GET(request) {
//   return new Response('Hello');
// }


export async function GET(request){
  //handles GET request for /api/certificates

  const certificates = [
    { id: 1, name: "First"},
    { id: 2, name: "Second"},
    { id: 3, name: "Third"},
    {}
  ]

  //Send the certificates as a response
  return new Response(JSON.stringify(certificates))
}


// export async function GET(request) {
//   return new Response('Hello');
// }


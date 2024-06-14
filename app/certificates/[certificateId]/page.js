import { deletePost, getPost } from "@/actions/actions"
import DeletePostBtn from "@/components/DeletePostBtn"
import Image from "next/image"

export const dynamic = 'force-dynamic'
export default async function Page({ params }) {
  const post = await getPost(params.certificateId)
  if (!post) throw new Error("Post not found")
  const { id, artist,
    artworkTitle,
    artworkFile, year, certificate } = post

  return (
    <div className="flex flex-col justify-center items-center border p-5">
      <h1>Artist: {artist}</h1>
      <h1>Title: {artworkTitle}</h1>
      <h1>Year: {year}</h1>
      <h1>Certificate: {certificate}</h1>
      <div className="p-5">
        <Image src={artworkFile} width={300} height={300} alt={artworkTitle} />
      </div>
      <DeletePostBtn id={id} />
    </div>
  )
}
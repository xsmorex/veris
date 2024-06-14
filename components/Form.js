import Link from 'next/link'

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='mb-12 text-3xl font-bold'>{type} and share.</h1>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2x1 flex gap-4 p-8  flex-col border glassmorphism'
      >
        <span className='mb-4'>Create your certificate</span>

        <input
          type='text'
          value={post.artworkTitle}
          onChange={(e) => setPost({
            ...post, artworkTitle: e.target.value
          })}
          required
          placeholder='Insert an artwork title'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <input type="text" value={post.artist}
          onChange={(e) => setPost({
            ...post, artist: e.target.value
          })}
          required
          placeholder='Insert an artist name'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <input type="text" value={post.year}
          onChange={(e) => setPost({
            ...post, year: e.target.value
          })}
          required
          placeholder='Insert year of creation'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <div className='flex justify-center items-center mx-3 my-3 gap-9'>
          <Link href='/'>Cancel</Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-orange-600 rounded-full'
          >
            {submitting ? "loading..." : type}
            {/* {submitting ? `${type}...` : type} */}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
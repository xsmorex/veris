
const DeleteModalPrompt = ({ open, onOpenChange, handleDelete, isDeleting }) => {
  return (
    <div className={`${open ? "fixed opacity-90 flex justify-center items-center  bg-slate-800" : "hidden"}  top-0 left-0 h-screen w-screen`}>
      <div className="w-[96%]  mx-auto max-w-sm bg-white p-4 rounded-md">
        <div className="space-y-6">
          <p className="text-base text-slate-900 " >Are you sure you want to delete this post?</p>
          <div className="flex flex-wrap justify-center gap-9 m-2">
            <button disabled={isDeleting} onClick={onOpenChange} className="py-1 px-2 text-sm rounded-md w-[100px] h-10 bg-slate-200 text-slate-800 ">Cancel</button>
            <button disabled={isDeleting} onClick={handleDelete} className="py-1 px-2 text-sm rounded-md w-[100px] h-10 bg-red-400 text-red-800">{isDeleting ? "loading.." : "Delete"}</button>
          </div>
        </div>
      </div>
    </ div >
  )
}

export default DeleteModalPrompt
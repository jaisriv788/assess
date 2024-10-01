export function Addreviews() {
  return (
    <div className="flex justify-center">
      <div className="mt-24 flex flex-col px-5 py-10 gap-7 w-1/4 border-2 border-gra-400">
        <div className="font-bold text-2xl">Add new review</div>
        <select className="border-2 border-gra-400 outline-none px-2 py-1">
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
        <input
          className="border-2 border-gra-400 outline-none px-2 py-1"
          type="text"
          placeholder=" Your name"
        />
        <input
          className="border-2 border-gra-400 outline-none px-2 py-1 "
          type="number"
          placeholder="Rating out of 10"
        />
        <textarea
          className="border-2 border-gra-400 outline-none px-2 py-1 h-28"
          placeholder="Review Comments"
        />
        <button className="border-2 border-white bg-indigo-600 text-white px-2 w-fit py-1 rounded-md self-end">
          Add new review
        </button>
      </div>
    </div>
  );
}

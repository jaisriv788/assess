import { Trash2, FilePenLine } from "lucide-react";

export function Reviews() {
  return (
    <div className="p-10 flex flex-col gap-7">
      <div className="flex items-center text-3xl font-bold justify-between">
        <div className="text-3xl font-bold">Avengers: Endgame</div>
        <div className="text-indigo-600">9.8/10</div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="border-2 border-gray-300 px-12 py-6 flex flex-col gap-5">
          <div className="flex justify-between">
            <div>Review Comment</div>
            <div>9/10</div>
          </div>
          <div className="flex justify-between">
            <div className="italic font-semibold">by Name</div>
            <div className="flex gap-2">
              {" "}
              <Trash2
                // onClick={() => {
                //   router.push("/addreviews");
                // }}
                className="text-gray-600 hover:text-black cursor-pointer"
                size={20}
              />
              <FilePenLine
                className="text-gray-600 hover:text-black cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-300 px-12 py-6 flex flex-col gap-5">
          <div className="flex justify-between">
            <div>Review Comment</div>
            <div>9/10</div>
          </div>
          <div className="flex justify-between">
            <div className="italic font-semibold">by Name</div>
            <div className="flex gap-2">
              {" "}
              <Trash2
                // onClick={() => {
                //   router.push("/addreviews");
                // }}
                className="text-gray-600 hover:text-black cursor-pointer"
                size={20}
              />
              <FilePenLine
                className="text-gray-600 hover:text-black cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

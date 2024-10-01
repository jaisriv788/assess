"use client";
import { Search, Trash2, FilePenLine, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface MyMovies {
  id: string;
  name: string;
  releaseDate: Date;
  averageRating?: number;
}

export function Main() {
  const router = useRouter();

  const [data, setData] = useState<MyMovies[]>([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get<MyMovies[]>(
          "http://localhost:3000/api/movies/all"
        );
        console.log(response.data);
        setData(response.data); // Fix: Assign response.data (the array) to the state
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="h-80 p-10 flex flex-col gap-5">
      <div className="text-3xl font-semibold">The best movie review site!</div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-md border-2 border-indigo-400 w-2/6">
        {" "}
        <Search size={20} />
        <input
          className="w-full  outline-none"
          type="text"
          placeholder="Search for your favourite movie."
        />
      </div>

      <div className="grid grid-cols-3 gap-16">
        {data.map((data) => {
          return (
            <div key={data.id} className="bg-indigo-200  px-8 py-8 flex flex-col gap-2">
              <div className="text-xl font-semibold">{data.name}</div>
              <div className="text-lg italic">Released: {new Date(data.releaseDate).toLocaleDateString()}</div>
              <div className="font-bold">Rating: {data.averageRating}</div>
              <div className="flex justify-end gap-2 ">
                <Eye
                  onClick={() => {
                    router.push("/reviews");
                  }}
                  className="text-gray-600 hover:text-black cursor-pointer"
                  size={20}
                />
                <Trash2
                  onClick={() => {
                    router.push("/addreviews");
                  }}
                  className="text-gray-600 hover:text-black cursor-pointer"
                  size={20}
                />
                <FilePenLine
                  className="text-gray-600 hover:text-black cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SavedUsers() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    const fetchUsers = async ()=> {
    const response = fetch('api/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
    }
    fetchUsers();
  }, [])
  
  return (
    <div className="w-full h-full p-20 flex flex-col text-2xl font-bold justify-start items-start">
        <span className="mb-5"> Copy Link and paste it on the other tab</span>
        <ul className="flex flex-col text-lg font-medium">
        {data.length > 0 && data.map( (file, i) => (
            <li key={i} className=" my-2">
                <a href={`file:///${file.path}`} target="_blank"
                className="text-blue-700 underline">
                    {file.path.split('files')[1]}
                </a>
            </li>
        ))}
        </ul>
    </div>
  )
}

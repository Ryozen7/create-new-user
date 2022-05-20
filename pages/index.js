import { useRouter } from "next/router"
import { FaPlus } from 'react-icons/fa';
export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-auto shadow-2xl border-1 rounded-md p-5 bg-primary">
        <button
        className="flex text-2xl p-10 hover:bg-lightGray w-full text-left rounded-md font-crimsonTextBold"
        onClick={()=> router.push('/add-new-user')}
        >
         <FaPlus className="mr-4"/> Create New User
        </button>
      </div>
    </div>
  )
}

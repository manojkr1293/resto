import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () =>{
  const router = useRouter();
  const handleLogout= () =>{
    localStorage.removeItem('resturentUser')
    router.push('/resturent');
  }
  return (
    <>
    <div className="flex justify-between px-5 m-5">
      <Link href="/">
        <h1 className="text-blue-500 font-medium text-2xl">Home</h1>
      </Link>
      
      <Link href="fooditems"><h1 className="text-blue-500 font-medium text-1xl">Food Page</h1></Link>
      <Link href='/'>
      <button className="p-2 bg-blue-600 text-white font-semibold mx-2 rounded-md" onClick={handleLogout}>LogOut</button>
      </Link>
      
    </div>
    </>
  )
}
export default Header;
import { Fascinate } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ResturentLogin = () =>{

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err,setErr] = useState(false);
  const router = useRouter();
  const hanldeLogin = async () =>{
   
    if(!email || !password){
      setErr(true);
      return false;
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let response = await fetch(`${apiUrl}api/resturent`,{
      method:"POST",
      body:JSON.stringify({email,password,isLogin:true})
    });

    response = await response.json();

    if(response.success){
     let {result} = response;
     delete result.password;
     localStorage.setItem("resturentUser",JSON.stringify(result));
     router.push('/resturent/dashboard');
    }else{
      alert("Login Failed");
    }

  }

  return (
   <>
    
        <div className="block">
          <div className="mt-10">
          <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            </div>
            <div className="mt-10">
              <label className="text-sm font-semibold text-gray-900">Email address</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-2 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              {
                err && !email && <small className="text-sm font-normal text-red-500">Please Enter Valid Email</small>
              }
            </div>

            <div className="mt-10">
              <div className="flex justify-between">
                <label className="text-sm font-semibold text-gray-900">Password</label>
                <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-gray-400">Forgot Password</a>
              </div>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mt-2 w-full py-1.5 px-2 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              {
                err && !password && <small className="text-sm text-red-500 font-normal">Please Enter Valid Password</small>
              }
            </div>
            <div className="mt-10 flex">
              <button onClick={hanldeLogin} className=" w-full font-semibold bg-indigo-600 text-white text-center px-4 py-2 rounded-md leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
         </div>
         
   </>
  )
}

export default ResturentLogin;
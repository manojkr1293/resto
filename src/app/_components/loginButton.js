import { useState } from "react";

const LoginButton = ({loginButtonClick}) =>{
 
  return(
    <p className="text-2x font-semibold leading-6 mt-10 text-center">Already Registered <span className="text-indigo-600 hover:text-indigo-500" onClick={loginButtonClick}> Login Here</span> </p>
  )
}
export default LoginButton;
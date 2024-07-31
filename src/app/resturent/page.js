"use client"
import { useState } from "react";
import ResturentLogin from "../_components/resturentLogin";
import ResturentRegistration from "../_components/resturentRegistration";
import LoginButton from "../_components/loginButton";
import RegistrationButton from "../_components/registrationButton";

const Resturent = () =>{
  const [login, setLogin] = useState(true);
  const handleLoginClick = () =>{
    setLogin(!login);
  }

  return (
    <>
    <div className="flex min-h-screen items-center justify-center">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {login ? <ResturentLogin/> :  <ResturentRegistration/>}
      {!login ?
      <LoginButton loginButtonClick = {handleLoginClick}/>
        :
        <RegistrationButton registrationButtonClick={handleLoginClick}/>
      }
      </div>
    </div>
      </>
  )
}

export default Resturent;
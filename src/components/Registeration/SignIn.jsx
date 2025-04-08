import React, { useEffect } from "react";
import { useState } from "react";
import login from "../../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {handleError, handlePromiss} from "./../../Notify"

export default function SignIn() {
  const token=  localStorage.getItem('userToken')
  console.log(token);
  const navigate = useNavigate();

  useEffect(()=>{
    if(token)
    {
      navigate('/profile');
    }
  },[])
  
  let [seen, setSeen] = useState(false);
  let [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  let [isLogging,setIsLogging]=useState(false)
  const handleSubmit = async (e) => {
    setIsLogging(true)
    e.preventDefault();
    console.log(loginInfo);

    try {
       const  baseURL= "https://backend-gik1.onrender.com"
      
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      let result = await response.json();
      console.log(result);

      const { success, message, error ,token} = result;
      if (success) {
        
        const loadMsg = "Authenticating... Please wait!";

      const successMsg=message 
       
      await handlePromiss(loadMsg,successMsg)
        
        
        localStorage.setItem("userToken",token)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        handleError(error);
      } else {
        handleError(message);
      }
    } catch (err) {
     handleError("Something went wrong!")
     console.log(err);
    }

    setIsLogging(false)
  };
  return (
    <>
      <div className="w-full flex items-center my-16 md:my-0 px-2 md:px-0">
        {/* {Left Side} */}
        <div className="w-full md:w-1/2 ">
          <div className="w-full md:max-w-md m-auto p-8 flex-col justify-center items-center border shaodow rounded-md">
            <div className="text-center flex-col  mb-8">
              <h1 className="text-xl font-semibold mb-6">E-commerce </h1>
              <h2 className="text-2xl font-bold mb-2">Hey There 🖐🏻</h2>
              <p className="text-sm font-light tracking-tighter">
                Enter user name and password to login
              </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full mb-6">
                <label className="block font-semibold" for="email">
                  Email
                </label>
                <input
                  className="w-full rounded-md outline-none px-4 py-2 border"
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setLoginInfo({
                      ...loginInfo,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-full mb-6">
                <label className="block font-semibold" for="password">
                  Password
                </label>
                <div className="flex justify-between items-center rounded-md  px-4 py-2 border">
                  <input
                    className="w-full outline-none pr-4"
                    type={seen ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={(e) =>
                      setLoginInfo({
                        ...loginInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <FaRegEyeSlash
                    onClick={() => setSeen(!seen)}
                    className={`hover:cursor-pointer ${
                      seen ? "hidden" : "block"
                    } `}
                  />
                  <FaRegEye
                    onClick={() => setSeen(!seen)}
                    className={`hover:cursor-pointer ${
                      seen ? "block" : "hidden"
                    } `}
                  />
                </div>
              </div>
              <input
                className="w-full rounded-md block bg-black text-white text-center py-2 hover:cursor-pointer hover:opacity-80"
                type="submit"
                value="Login"
                disabled={isLogging}
              />

              <p className=" mt-4 text-center ">
                Dont't have an account?
                <Link to={"/register"} className="text-blue-600  ml-2">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
        {/* {Right Side} */}
        <div className="hidden md:block w-1/2  h-full ">
          <img
            className="h-[700px] w-full object-cover"
            src={login}
            alt="Login Image"
          />
        </div>
      </div>
    </>
  );
}

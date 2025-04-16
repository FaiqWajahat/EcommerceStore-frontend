import React, { useContext } from "react";
import { useState  } from "react";
import login from "../../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { handleError, handlePromiss,  } from "../../Notify";
import { CartContext } from "../Context/Cart";

export default function SignUp() {
  const state=useContext(CartContext);
    const baseURL=state.baseUrl
   
  const navigate = useNavigate();
  let [seen, setSeen] = useState(false);
  let [SignupInfo, setSignupinfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [isSigning,setIsSigning]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(SignupInfo);
        if(!SignupInfo.name)
        {
          handleError("Name is required")
          return
        }
    
        if(!SignupInfo.email)
        {
          handleError("Email is required");
          return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(SignupInfo.password)) {
          handleError("Password must contain at least: 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)");
          return;
        }

    try {
      setIsSigning(true)
    
      const response = await fetch(`${baseURL}/signup`, {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(SignupInfo),
      });

      let result = await response.json();
      console.log(result);

      const { success, message, error } = result;
      if (success) {
        const loadMsg = "Creating your account... Please wait!";
        const successMsg = "Registered successfully!";

        await handlePromiss(loadMsg, successMsg);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setIsSigning(false)
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
                Enter usename, email and password to register
              </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full mb-6">
                <label className="block font-semibold" for="Name">
                  Name
                </label>
                <input
                  className="w-full rounded-md outline-none px-4 py-2 border"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) =>
                    setSignupinfo({
                      ...SignupInfo,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
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
                    setSignupinfo({
                      ...SignupInfo,
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
                    className="w-full outline-none pr-4 "
                    type={seen ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={(e) =>
                      setSignupinfo({
                        ...SignupInfo,
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
                className={`w-full rounded-md block bg-black text-white text-center py-2 hover:cursor-pointer hover:opacity-80 ${isSigning?"opacity-80":""}`}
                type="submit"
                value={`${isSigning?"Processing...":"Register"}`}
                disabled={isSigning}
              />

              <p className=" mt-4 text-center ">
                Have an account?
                <Link to={"/login"} className="text-blue-500  ml-2">
                  Login
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

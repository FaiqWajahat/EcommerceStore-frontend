import React, { useState } from "react";
import { handleError, handleSuccess } from "../../Notify";

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [fetchData, setFetchData] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if(!formData.name)
    {
      handleError("Name is required")
      return
    }

    if(!formData.email)
    {
      handleError("Email is required");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      handleError("Password must contain at least: 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)");
      return;
    }
    setFetchData(true);
    try {
      const baseURL = "http://localhost:8080";
      const response = await fetch(`${baseURL}/signup`, {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const Result = await response.json();
      if (Result.success) {
        handleSuccess(Result.message);
        setFormData({
          name: "",
          email: "",
          password: "",
          role:"customer"
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleError(Result.message);
      }
    } catch (error) {
      console.log(error);
      handleError("Failed to add user");
    } finally {
      setFetchData(false);
      
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-lg">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-slate-700 font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name should have at least 3 characters"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-slate-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter a valid email"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-slate-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password must contain at least: 1 uppercase, 1 lowercase, 1 number, and 1 special character"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-slate-700 font-semibold mb-2 text-sm md:text-base"
          >
            Select Role
          </label>

          <div className="relative">
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
              className="w-full bg-white border border-gray-300 px-3 py-2 pr-10 rounded-md text-sm text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none "
            >
              <option className="text-sm" value="customer">
                Customer
              </option>
              <option className="text-sm" value="admin">
                Admin
              </option>
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full  flex justify-end items-center">
          <input
            type="submit"
            disabled={fetchData}
            value={fetchData ? "Adding user..." : "Add User"}
            className={`px-6 py-3 text-center w-full md:w-fit text-sm cursor-pointer rounded-md shadow-lg transition duration-300 ease-in-out ${
              fetchData
                ? "bg-green-700 text-gray-300 cursor-default"
                : " bg-green-600 hover:bg-green-700 text-white"
            } `}
          />
        </div>
      </form>
    </div>
  );
};

export default NewUser;

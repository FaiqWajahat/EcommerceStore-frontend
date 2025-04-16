import React, { useContext, useEffect, useState } from "react";
import { handleError } from "../../Notify";
import { toast } from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa";
import { CartContext } from "../Context/Cart";
const RegisterdUsers = () => {
  const state=useContext(CartContext);
    const baseURL=state.baseUrl
   
  const [allUsers, setAllUsers] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  
  useEffect(() => {
    getUsers();
  }, [allUsers]);

  const getUsers = async () => {
    try {
    
      const response = await fetch(`${baseURL}/admin/getUsers`, {
        method: "GET",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(),
      });

      const Result = await response.json();
      setAllUsers([...Result?.allUsers]);
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }
  };


  const showConfirmationToast = () => {
    return new Promise((resolve) => {
      toast.custom((t) => (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-5 py-4 w-[320px] animate-enter">
          <div className="flex items-start gap-3">
            <div className="text-yellow-500 mt-1">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold text-sm">
                Are you sure you want to proceed?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This action might be irreversible.
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    resolve(false);
                  }}
                  className="px-4 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    resolve(true);
                  }}
                  className="px-4 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Sure
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    });
  };

  
  
  const removeUser = async (userEmail) => {
    const state=useContext(CartContext);
      const baseURL=state.baseUrl
     
  const answer =await  showConfirmationToast();
  if(!answer)
  {
    return;
  }
    setFetchData(true)
    try {
     
  
      const response = await fetch(`${baseURL}/admin/deleteUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email: userEmail }), 
      });
  
      const result = await response.json();
      setAllUsers([...allUsers]); 
  
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    } finally{
      setFetchData(false)
    }
  };
  
  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-[600px] w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="font-semibold px-3 py-2">NAME</th>
            <th className="font-semibold px-3 py-2">Email</th>
            <th className="font-semibold px-3 py-2">Role</th>
            <th className="font-semibold px-3 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {fetchData?
             <tr>
             <td
               colSpan="4"
               className="py-6 text-center text-gray-500 text-sm italic"
             >
               fetching users...
             </td>
           </tr>:
          
          allUsers.length!=0?
            allUsers.map((data, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-800">{data.name}</td>
              <td className="px-3 py-2 text-gray-600">{data.email}</td>
              <td className="px-3 py-2 text-gray-600">{data?.role}</td>
              <td className="px-3 py-2 flex justify-center">
                <button
                  onClick={() => removeUser(data.email)}
                  className="inline-block px-4 py-2 text-xs rounded-md bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        :
        <tr>
        <td
          colSpan="4"
          className="py-6 text-center text-gray-500 text-sm italic"
        >
          No user found
        </td>
      </tr>
        }
        </tbody>
      </table>
    </div>
  );
};

export default RegisterdUsers;

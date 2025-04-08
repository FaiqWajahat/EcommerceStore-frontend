import React, { useState ,useEffect} from 'react'
import ProfileOrders from '../components/Orders/ProfileOrders'
import Logout from '../components/Registeration/Logout'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Profile() {

   const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    useEffect(() => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setName(decodedToken.name);
          setEmail(decodedToken.email);
        } catch (error) {
          console.error("Invalid token:", error);
        }
      } else {
        navigate("/login");
      }
    }, []);
  return (
    <>
   
      <main className='mb-6 mt-5 min-h-screen px-2 md:px-6'>
       <Logout name={name} email={email}/>
       
        <ProfileOrders userEmail={email}/>
       
      </main>
      
    </>
  )
}

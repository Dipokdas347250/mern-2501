import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../zustendstore/AuthStore';

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  const {setUser, user} = useAuthStore()
  console.log(user);
  
  useEffect(()=>{
    
    axios.get("http://localhost:8080/api/v1/api/auth/getme", { withCredentials: true })
    .then((response) => {
      
      setUser(response.data.data)
    })
    .catch((error) => {
      console.error("Error:", error);
      navigate("/login")
      }
    );
  }, []);

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute
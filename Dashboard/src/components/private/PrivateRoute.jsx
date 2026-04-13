import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    
    axios.get("http://localhost:8080/api/v1/api/auth/getme", { withCredentials: true })
    .then((response) => {
      console.log("Response:", response.data);
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
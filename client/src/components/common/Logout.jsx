import React, { useEffect } from "react";
import HttpClient from "../../HttpClient";
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await HttpClient.post("api/logout", {
          withCredentials: true,
        });
        navigate('/form/');
        console.log(response); // Assuming the response contains a 'data' field
        setIsLoggedIn(false);
        
        
      } catch (error) {
        console.error(error);
      }
    };
    logOut();
  }, []);

  return <div>Logging out</div>;
};

export default Logout;
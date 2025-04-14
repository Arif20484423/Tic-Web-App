"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/details`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response) {
        setUser(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        router.push("/signin");
        console.error("Failed to fetch user details");
      }
    } catch (error) {
        console.log(response);
      setLoading(false);
      if (error.response) {
        if (error.response.data.redirect) {
          router.push("/signin");
        } else {
          console.error(
            "Error fetching user details:",
            error.response.data.message
          );
        }
      } else {
        console.error("Error fetching user details:", error.message);
      }
    }
  };

  const login = () => {
    fetchUserDetails();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

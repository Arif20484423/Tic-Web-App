"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            setAuthToken(token);
            fetchUserDetails(token);
        }
        setLoading(false);
    }, []);

    const fetchUserDetails = async (token) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/details`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.data);
            } else {
                console.error("Failed to fetch user details");
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const login = (token) => {
        setAuthToken(token);
        fetchUserDetails(token);
        router.push("/");
    };

    const logout = () => {
        Cookies.remove("authToken"); 
        setAuthToken(null);
        setUser(null);
        router.push("/signin");
    };

    return (
        <AuthContext.Provider value={{ authToken, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
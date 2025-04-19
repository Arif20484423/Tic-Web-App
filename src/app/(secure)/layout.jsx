"use client";

import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNavbar from "@/components/secure/Navbar/SideNavbar";
import Header from "@/components/secure/Navbar/Header";
import styles from "./_Component.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AppContext } from "@/context/app.context";
import Loading from "@/components/utils/Loading";

const layout = ({ children }) => {
  const { setUser } = useContext(AppContext);

  const [state, setState] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/api/v1/user",
          { withCredentials: true }
        );
        setState(2);
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
        if (error.response) {
          if (error.response.data.redirect) {
            router.push(error.response.data.redirectTo);
          } else {
            throw new Error(
              "some error occurred: " +
                error.response.data.message +
                " : " +
                error.response.data.error
            );
          }
        } else {
          throw new Error("some error occurred: " + error);
        }
      }
    }
    getUser();
  }, []);

  if (state == 1) {
    return (
      <div className=" flex justify-center items-center h-[100vh]">
        <Loading />
      </div>
    );
  } else if (state == 2) {
    return (
      <div className=" flex flex-row h-full w-full bg-[var(--blackColor-050)] ">
        {/* sidebar            */}
        <div>
          <div
            className="flex flex-col sm:hidden  pt-[25px] pl-[10px]
        hover:cursor-pointer"
          >
            <GiHamburgerMenu />
          </div>
          <div className="h-screen hidden sm:flex flex-col w-[220px] bg-[var(--primaryColor-500)] px-[20px] py-[50px]  gap-y-[100px] ">
            <SideNavbar></SideNavbar>
          </div>
        </div>
        {/* main content */}
        <div className="flex-1 w-min-[400px] w-[calc(100vw-220px)] ">
          {/* Header */}
          <Header />
          {/* body */}
          <div
            className={`h-[calc(100vh-70px)] w-[100%] overflow-scroll ${styles.body}`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    <div> This should not be rendered</div>;
  }
};

export default layout;

"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/secure/table-components/Table";
import axios from "axios";
import StudentFilter from "./StudentFilter";
import toast from "react-hot-toast";
const Students = () => {
  const [students, setStudents] = useState([]);
  function createStudents(data) {
    const tempStudents = [];
    let student = [
      { label: "Name", size: "extraLarge" },
      { label: "Gender", size: "small" },
      { label: "Reg Num", size: "medium" },
      { label: "Batch", size: "medium" },
      { label: "Role", size: "medium" },
      { label: "Resume", size: "large" },
      { label: "Gap", size: "small" },
      { label: "CGPA", size: "small" },
      { label: "UG", size: "small" },
      { label: "12th", size: "small" },
      { label: "10th", size: "small" },
      { label: "College Email", size: "extraLarge" },
      { label: "Contact", size: "medium" },
      { label: "Alternate Contact", size: "medium" },
      { label: "Email", size: "extraLarge" },
      { label: "Alternate Email", size: "large" },
      { label: "DOB", size: "small" },
      { label: "Languages", size: "large" },
      { label: "Domain", size: "large" },
    ];

    tempStudents.push(student);
    for (let i = 0; i < data.length; i++) {
      let languages = "";
      for (let j = 0; j < data[i].languages.length; j++) {
        if (j == data[i].languages.length - 1) {
          languages += data[i].languages[j];
        } else {
          languages += data[i].languages[j] + ", ";
        }
      }
      let domain = "";
      for (let j = 0; j < data[i].domain.length; j++) {
        if (j == data[i].domain.length - 1) {
          domain += data[i].domain[j];
        } else {
          domain += data[i].domain[j] + ", ";
        }
      }
      student = [
        { label: data[i].persondetails[0].name, size: "extraLarge" },
        { label: data[i].persondetails[0].gender, size: "small" },
        { label: data[i].rollNumber, size: "medium" },
        { label: data[i].batchdetails[0].session, size: "medium" },
        { label: data[i].role, size: "medium" },
        { label: data[i].resume, size: "large" },
        { label: data[i].gapYear, size: "small" },
        { label: data[i].PG, size: "small" },
        { label: data[i].UG, size: "small" },
        { label: data[i].twelfth, size: "small" },
        { label: data[i].tenth, size: "small" },
        { label: data[i].collegeEmail, size: "extraLarge" },
        { label: data[i].persondetails[0].contact, size: "medium" },
        { label: data[i].persondetails[0].altContact, size: "medium" },
        { label: data[i].persondetails[0].email, size: "extraLarge" },
        { label: data[i].persondetails[0].altEmail, size: "large" },
        { label: data[i].dob, size: "small" },
        { label: languages, size: "large" },
        { label: domain, size: "large" },
      ];
      tempStudents.push(student);
    }
    setStudents(tempStudents);
  }

  useEffect(() => {
    async function fetchStudents() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/students`,
          {
            withCredentials: true,
          }
        );
        createStudents(res.data.data);
      } catch (error) {
        if (error.response) {
          toast.error(
            "While fetching information " + error.response.data.message
          );
        } else {
          toast.error("While fetching information Some error occured");
        }
        console.error(error);
      }
    }
    fetchStudents();
  }, []);
  return (
    <div className="m-1 px-4 w-max ">
      <StudentFilter></StudentFilter>
      <Table data={students} />
    </div>
  );
};

export default Students;

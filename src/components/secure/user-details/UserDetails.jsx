"use client";
import React, { useEffect, useState } from "react";
import Input from "../form-components/Input";
import Button from "../form-components/Button";
import RadioInput from "./RadioInput";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const UserDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [ids, setIds] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [altPhoneNumber, setAltPhoneNumber] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [batch, setBatch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [languages, setLanguages] = useState("");
  const [domain, setDomain] = useState("");
  const [gapYear, setGapYear] = useState("");
  const [tenth, setTenth] = useState(0);
  const [twelfth, setTwelfth] = useState(0);
  const [ug, setUg] = useState(0);
  const [pg, setPg] = useState(0);
  const [resume, setResume] = useState("");
  const [gender, setGender] = useState("");
  const collectData = async () => {
    try {
      console.log("gettinbg data");
      const res = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/details`,
        { withCredentials: true }
      );
      console.log(res);
      const data = res.data.data;
      console.log(data);

      // Format the date to "yyyy-MM-dd"
      const formattedDob = data.person.dob
        ? new Date(data.person.dob).toISOString().split("T")[0]
        : "";

      setName(data.person.name);
      setEmail(data.person.email);
      setAltEmail(data.person.altEmail || "");
      setPhoneNumber(data.person.contact);
      setAltPhoneNumber(data.person.altContact || "");
      setCollegeEmail(data.collegeEmail);
      setDateOfBirth(formattedDob);
      setBatch(data.batch.session);
      setRollNumber(data.rollNumber);
      setLanguages(data.languages ? data.languages.join(", ") : "");
      setDomain(data.domain ? data.domain.join(", ") : "");
      setGapYear(data.gapYear);
      setTenth(data.tenth || 0);
      setTwelfth(data.twelfth || 0);
      setUg(data.UG || 0);
      setPg(data.PG || 0);
      setResume(data.resume || "");
      setGender(data.person.gender);
      setIds(() => [data.person._id, data._id]);
      console.log(data.person._id, data._id);
    } catch (error) {
      if (error.response) {
        console.error(
          "Error during fetching user information : ",
          error.response.data.message
        );
        if (error.response.data.redirect) {
          router.push(error.response.data.redirectTo);
        }
      } else {
        console.error("Some error occurred : ", error);
      }
    }
  };
  useEffect(() => {
    collectData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const twelfthAsNumber = parseInt(twelfth, 10);
      const languagesArray = languages.split(",").map((lang) => lang.trim());
      const DomainArray = domain.split(",").map((dom) => dom.trim());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/details`,
        {
          personid: ids[0],
          studentid: ids[1],
          person: {
            name,
            dob: dateOfBirth,
            gender,
            email,
            altEmail,
            contact: phoneNumber,
            altContact: altPhoneNumber,
          },
          student: {
            rollNumber,
            collegeEmail,
            languages: languagesArray,
            resume,
            domain: DomainArray,
            gapYear,
            tenth,
            twelfth: twelfthAsNumber, // Use the converted value
            UG: ug,
            PG: pg,
          },
        },
        { withCredentials: true }
      );
      setLoading(false);
      if (res.status == 200) {
        toast.success("Details Updated Successfully");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error(error.response.data.message);
        console.error(
          "Error updating information : ",
          error.response.data.message,
          error.response.data.error
        );
        if (error.response.data.redirect) {
          router.push(error.response.data.redirectTo);
        }
      } else {
        toast.error("Some error occurred");
        console.error("Some error occurred : ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full min-w-[200px] py-[25px] gap-y-[20px] items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-[25px] p-4 w-max  bg-[var(--blackColor-050)] ">
          <Input
            size="large"
            label="Name"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={name}
            setValue={setName}
            required={true}
          />
          <Input
            size="large"
            label="Email"
            priority="optional"
            type="email"
            placeholder="Enter Details"
            value={email}
            setValue={setEmail}
          />
          <Input
            size="large"
            label="Alternate Email"
            priority="optional"
            type="email"
            placeholder="Enter Details"
            value={altEmail}
            setValue={setAltEmail}
          />
          <Input
            size="large"
            label="Phone Number"
            priority="required"
            type="number"
            placeholder="Enter Details"
            value={phoneNumber}
            setValue={setPhoneNumber}
            required={true}
          />
          <Input
            size="large"
            label="Alternate Phone Number"
            priority="optional"
            type="number"
            placeholder="Enter Details"
            value={altPhoneNumber}
            setValue={setAltPhoneNumber}
          />
          <Input
            size="large"
            label="College Email"
            priority="required"
            type="email"
            placeholder="Enter Details"
            value={collegeEmail}
            setValue={setCollegeEmail}
            required={true}
          />
          <Input
            size="large"
            label="Date Of Birth"
            priority="required"
            type="date"
            placeholder="Enter Details"
            value={dateOfBirth}
            setValue={setDateOfBirth}
            required={true}
          />
          <RadioInput
            size="large"
            label="Gender"
            priority="required"
            value={gender}
            setValue={setGender}
          />
          <Input
            size="large"
            label="Batch"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={batch}
            setValue={setBatch}
            disabled={true}
          />
          <Input
            size="large"
            label="Roll Number"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={rollNumber}
            setValue={setRollNumber}
            required={true}
            disabled={true}
          />
          <Input
            size="large"
            label="Languages"
            priority="optional"
            type="text"
            placeholder="Enter languages separated by comma"
            value={languages}
            setValue={setLanguages}
          />
          <Input
            size="large"
            label="Domain"
            priority="required"
            type="text"
            placeholder="Enter domain separated by comma >= 1"
            value={domain}
            setValue={setDomain}
            required={true}
          />
          <Input
            size="large"
            label="Gap Year"
            priority="required"
            required={true}
            type="number"
            placeholder="Enter Details"
            value={gapYear}
            setValue={setGapYear}
          />

          <Input
            size="large"
            label="Resume"
            priority="required"
            type="text"
            placeholder="Enter Drive Link"
            value={resume}
            setValue={setResume}
            required={true}
          />
          {/* <div className="grid grid-cols-2 w-[350px] gap-13"> */}
          <div className="flex flex-col sm:flex-row w-full w-max[350px] justify-between gap-[15px]">
            <Input
              size="small"
              label="10th"
              priority="required"
              type="number"
              placeholder="Enter Details"
              value={tenth}
              setValue={setTenth}
              required={true}
            />
            <Input
              size="small"
              label="12th"
              priority="required"
              type="number"
              placeholder="Enter Details"
              value={twelfth}
              setValue={setTwelfth}
              required={true}
            />
          </div>
          {/* <div className="grid grid-cols-2 w-[350px] gap-13"> */}
          <div className="flex flex-col sm:flex-row w-full w-max[350px] justify-between gap-[15px]">
            <Input
              size="small"
              label="UG"
              priority="optional"
              type="text"
              placeholder="Enter Details"
              value={ug}
              setValue={setUg}
            />
            <Input
              size="small"
              label="PG"
              priority="optional"
              type="text"
              placeholder="Enter Details"
              value={pg}
              setValue={setPg}
            />
          </div>
        </div>
        <div className="flex w-full max-w-[350px] justify-center">
          <div className="flex flex-col sm:flex-row w-full max-w-[350px] justify-center items-center gap-[25px]">
            <Button
              size="medium"
              variant="filled"
              children
              type="submit"
              loading={loading}
            >
              Save Changes
            </Button>
            <Button
              size="medium"
              variant="outline"
              children
              type="button"
              onClick={() => collectData()}
            >
              Discard Changes
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UserDetails;

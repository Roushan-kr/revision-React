import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({});
  // const [showData, setShowData] = useState([]);

  // const { gitId } = useParams();

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${gitId}`)
  //     .then((res) => res.json())
  //     .then((userData) => {
  //       console.log(userData);
  //       setData(userData);
  //       // getUserData(userData);
  //     });
  // }, [gitId]);

  // method 2 using loader prop and useLoaderData from react router dom
  const data= useLoaderData()

  function getUserData(userData) {
    const userEntries = Object.entries(userData);
    const formattedData = userEntries.map(([key, value]) => (
      <p key={key} >
      <strong>{key}:</strong> {value}
      </p>
    ));
    setShowData(formattedData);
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data?.followers}
      <div className="flex flex-wrap ">
      <img src={data?.avatar_url} alt="profile icon" className="w-44 h-44" />
      {/* <div className="text-sm ">{showData}</div> */}
      </div>
    </div>
  );
}

export default Github;

export const githubinfolodaer = async ()=>{
  // const { gitId } = useParams();

    const result = await fetch(`https://api.github.com/users/roushan-kr`)
    return result.json()
  // because this asyn function i use this as loder

}
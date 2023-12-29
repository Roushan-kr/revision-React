import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");
  const { data } = useContext(UserContext);
  const handelGetData = () => {
    setName(data.uName);
    setPasswd(data.passwd);
  };
  return (
    data && <div>
      <div
        className="bg-slate-600 w-full h-auto text-white text-xl
      rounded-xl "
      >
        <div className="bg-slate-200 w-40 rounded-3xl m-auto my-3 text-black p-2 mt-5">name: {name}</div>
        <div className="bg-slate-200 w-40 rounded-3xl m-auto my-3 text-black p-2">password: {passwd}</div>

        <button className="bg-orange-100 rounded-xl p-4 text-slate-900" type="submit" onClick={handelGetData}>
          Check now
        </button>
      </div>
    </div>
  );
}

export default Profile;

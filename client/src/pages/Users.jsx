import React, { useEffect, useState } from "react";

const Users = () => {
  const [dataDb, setDataDb] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const cookies = document.cookie;
      const accesToken = cookies.split(";");

      let token = null;
      accesToken.forEach((cookie) => {
        const [name, value] = cookie.split("=");
        if (name.trim() === "jwt") {
          token = value;
        }
      });
      const res = await fetch("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
        json = await res.json();
        setDataDb(json)
        console.log(json)
    };
    getUsers();
  }, []);

  return (
    <>
      <h1>usuarios</h1>
      {dataDb.length > 0 ?dataDb.map((user,index) => (
        <p key={index}><b>{user.id}: </b>{user.username}</p>
      )) : ""}
    </>
  );
};

export default Users;

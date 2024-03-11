import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    const getUsers = async () => {
      const cookies = document.cookie;

      const res = await fetch("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXN1YXJpbzEiLCJpYXQiOjE3MDk3OTYwMDZ9.oP6xDjyEGXAzpmFusRpoZfnEDKQ2L7BlOrPxIBgu0K4`,
          },
        }),
        json = await res.json();
      console.log(cookies);
      console.log(json);
    };
    getUsers();
  }, []);
  return (
    <>
      <h1>usuarios</h1>
    </>
  );
};

export default Users;
